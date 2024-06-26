import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from '../date-picker/DatePicker';
import SearchField from '../search-field/SearchField';
import MultiSelect from '../select/Select';
import ServerSelect from '../server-select/ServerSelect';
import { PracticeProgramsSearchConfig } from './configs/PracticeProgramsSearch.config';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import { useNomenclature } from '../../../store/nomenclatures/Nomenclatures.selectors';
import { ISelectData, mapItemToSelect } from '../../helpers/Nomenclature.helper';
import { useTranslation } from 'react-i18next';
import {
  useFacultiesQuery,
  usePracticeDomainsQuery,
} from '../../../services/nomenclature/Nomeclature.queries';
import PracticeProgramFilterModal from '../practice-program-filter-modal/PracticeProgramFilterModal';
import { useQueryParams, encodeQueryParams } from 'use-query-params';
import { stringify } from 'query-string';
import {
  getCities,
  getDomains,
  getFaculties,
} from '../../../services/nomenclature/Nomenclature.service';
import { WorkingHours } from '../../enums/WorkingHours.enum';
import { PROGRAMS_QUERY_PARAMS } from '../../constants/Programs.constants';
import { countFilters } from '../../helpers/Filters.helpers';
import { MENU_ROUTES_HREF } from '../../constants/Menu.constants';
import { mapCitiesToSelect } from '../../helpers/Format.helper';

interface PracticeProgramsSearchProps {
  onSearchCallback?: (search: string) => void;
}

const PracticeProgramsSearch = (props: PracticeProgramsSearchProps) => {
  const { t } = useTranslation('practice_programs_search');

  // filter modal state
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);
  // nomenclature values
  const { faculties } = useNomenclature();

  const { data: domains } = usePracticeDomainsQuery();

  // query params state
  const [query, setQuery] = useQueryParams(PROGRAMS_QUERY_PARAMS);

  // form state
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  // Queries
  useFacultiesQuery();

  useEffect(() => {
    (async () => {
      const filters = await initFilters();
      reset({ ...filters });
    })();
  }, [domains]);

  const search = (data: any) => {
    // 1. map query values
    const selectedFaculties = data?.faculties?.map((faculty: ISelectData) => faculty.value);
    const selectedDomains = data?.domains?.map((domain: ISelectData) => domain.value);
    const queryValues = {
      search: data?.search?.trim() || undefined,
      workingHours: data?.workingHours?.value || undefined,
      locationId: data?.locationId?.value || undefined,
      faculties: selectedFaculties?.length > 0 ? selectedFaculties : undefined,
      domains: selectedDomains?.length > 0 ? selectedDomains : undefined,
      start: data?.start || undefined,
      end: data?.end || undefined,
    };

    // 2. set query params
    setQuery(queryValues);
    // 3 update filters cound
    setFiltersCount(countFilters(queryValues));

    // 4. redirect with correct query set
    props.onSearchCallback &&
      props.onSearchCallback(
        `?${stringify(encodeQueryParams(PROGRAMS_QUERY_PARAMS, queryValues))}`,
      );

    // 5. reset form
    reset({
      ...data,
      start: data?.start || null,
      end: data?.end || null,
    });
  };

  const loadOptionsLocationSearch = async (searchWord: string) => {
    return getCities({ search: searchWord }).then((cities) => cities.map(mapCitiesToSelect));
  };

  // TODO: These operations should take place in each form cell which requires server data
  const initFilters = async () => {
    const {
      locationId,
      domains: queryDomains,
      faculties: queryFaculties,
      workingHours,
      group,
      ...otherQueryParams
    } = query;

    // init should get me the correct values for
    let selectedLocationId, selectedFaculties, selectedWorkingHours, selectedDomains;

    // 1. city
    if (locationId) {
      const citiesResults = await getCities({ cityId: locationId.toString() });
      selectedLocationId = mapCitiesToSelect(citiesResults[0]);
    }

    // 2. faculties
    if (queryFaculties && queryFaculties?.length > 0) {
      const allFaculties = await getFaculties();
      selectedFaculties = allFaculties
        .filter((faculty: { id: number; name: string }) => queryFaculties?.includes(faculty.id))
        .map(mapItemToSelect);
    }

    // 3. hours
    if (workingHours) {
      selectedWorkingHours = WorkingHours.find((wh) => wh.value === workingHours);
    }

    // 4. domains
    if (queryDomains && queryDomains?.length > 0) {
      const allDomains = await getDomains();
      selectedDomains = allDomains
        .filter((domain: { id: number; name: string }) => queryDomains?.includes(domain.id))
        .map(mapItemToSelect);
    }

    if (group && domains) {
      const groupedDomains = domains
        ?.filter((domain: any) => domain.group === query.group)
        .map(mapItemToSelect);

      selectedDomains = [...(selectedDomains ? selectedDomains : []), ...groupedDomains];
    }

    setFiltersCount(countFilters(query));

    return {
      locationId: selectedLocationId,
      domains: selectedDomains,
      faculties: selectedFaculties,
      workingHours: selectedWorkingHours,
      ...otherQueryParams,
    };
  };

  return (
    <div className="bg-yellow w-full items-center bg-search bg-no-repeat bg-cover bg-center">
      <div className="wrapper 2xl:w-[70%] lg:max-w-screen-lg">
        <div className="flex flex-col w-full gap-2 text-center">
          <p className="font-titilliumBold sm:text-4xl text-xl text-black">{t('title')}</p>
          <p className="font-titillium sm:text-xl text-black sm:text-center text-left">
            {t('subtitle')}
            <a
              className="text-black underline cursor-pointer"
              href={MENU_ROUTES_HREF.practice_programs}
            >
              {t('subtitle_link')}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full sm:items-center">
          <div className="flex w-full items-center h-14">
            <div className="sm:w-3/4 w-full">
              <Controller
                key={PracticeProgramsSearchConfig.search.key}
                name={PracticeProgramsSearchConfig.search.key}
                rules={PracticeProgramsSearchConfig.search.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <SearchField
                      config={{
                        ...PracticeProgramsSearchConfig.search.config,
                        name: PracticeProgramsSearchConfig.search.key,
                        error: errors[PracticeProgramsSearchConfig.search.key]?.message,
                        defaultValue: value,
                        onChange: onChange,
                        id: 'programs-search__term',
                        onKeyUp: handleSubmit(search),
                      }}
                    />
                  );
                }}
              />
            </div>
            <button
              aria-label={t('common:search.search')}
              type="button"
              className="text-sm sm:text-base sm:hidden text-yellow bg-black px-4 flex items-center justify-center h-full shadow-md"
              onClick={handleSubmit(search)}
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <div className="w-1/4 h-14 hidden sm:flex">
              <Controller
                key={PracticeProgramsSearchConfig.locationId.key}
                name={PracticeProgramsSearchConfig.locationId.key}
                rules={PracticeProgramsSearchConfig.locationId.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <ServerSelect
                      id="programs-search-location"
                      value={value}
                      isMulti={false}
                      isClearable
                      placeholder={PracticeProgramsSearchConfig.locationId.placeholder}
                      onChange={onChange}
                      loadOptions={loadOptionsLocationSearch}
                      addOn={PracticeProgramsSearchConfig.locationId.addOn}
                    />
                  );
                }}
              />
            </div>
          </div>
          <div
            className="sm:hidden flex justify-flex-start h-14 items-center bg-white px-4 gap-2 rounded-md shadow w-fit cursor-pointer active:bg-gray-200"
            onClick={() => setFilterModalOpen(true)}
          >
            <p
              id="create-organization-activity__button-back"
              className="text-sm sm:text-base  h-full flex items-center"
            >
              {t('common:search.filters')}
            </p>
            <AdjustmentsIcon className="w-5 h-5" />
            {filtersCount > 0 && (
              <p
                id="create-organization-activity__button-back"
                className="text-base rounded-full bg-yellow-500 p-2 flex items-center w-10 justify-center"
              >
                {filtersCount}
              </p>
            )}
          </div>

          <div className="hidden sm:grid sm:grid-cols-6 w-full h-14 items-center">
            <Controller
              key={PracticeProgramsSearchConfig.faculties.key}
              name={PracticeProgramsSearchConfig.faculties.key}
              rules={PracticeProgramsSearchConfig.faculties.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <MultiSelect
                    id="programs-search-faculties"
                    value={value}
                    isMulti={true}
                    isClearable
                    placeholder={PracticeProgramsSearchConfig.faculties.placeholder}
                    onChange={onChange}
                    options={faculties.map(mapItemToSelect)}
                    icon={PracticeProgramsSearchConfig.faculties.icon}
                  />
                );
              }}
            />
            <Controller
              key={PracticeProgramsSearchConfig.start.key}
              name={PracticeProgramsSearchConfig.start.key}
              rules={PracticeProgramsSearchConfig.start.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <DatePicker
                    defaultValue={value || value === null ? value : undefined}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.start.placeholder}
                  />
                );
              }}
            />
            <Controller
              key={PracticeProgramsSearchConfig.end.key}
              name={PracticeProgramsSearchConfig.end.key}
              rules={PracticeProgramsSearchConfig.end.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <DatePicker
                    defaultValue={value || value === null ? value : undefined}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.end.placeholder}
                  />
                );
              }}
            />
            <Controller
              key={PracticeProgramsSearchConfig.workingHours.key}
              name={PracticeProgramsSearchConfig.workingHours.key}
              rules={PracticeProgramsSearchConfig.workingHours.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <MultiSelect
                    id="create-organization-workingHours"
                    value={value}
                    isClearable
                    isMulti={false}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.workingHours.config.placeholder}
                    options={PracticeProgramsSearchConfig.workingHours.config.collection}
                    icon={PracticeProgramsSearchConfig.workingHours.icon}
                  />
                );
              }}
            />
            <Controller
              key={PracticeProgramsSearchConfig.domains.key}
              name={PracticeProgramsSearchConfig.domains.key}
              rules={PracticeProgramsSearchConfig.domains.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <MultiSelect
                    id="create-organization-domains"
                    value={value}
                    isClearable
                    isMulti={true}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.domains.config.placeholder}
                    options={domains?.map(mapItemToSelect) || []}
                    icon={PracticeProgramsSearchConfig.domains.icon}
                  />
                );
              }}
            />
            <button
              aria-label={t('common:search.search')}
              id="programs-search__button__submit"
              type="button"
              className="text-sm sm:text-base text-yellow bg-black w-full h-full shadow-md hover:bg-black-800"
              onClick={handleSubmit(search)}
            >
              {t('common:search.search')}
            </button>
          </div>
        </div>
        {isFilterModalOpen && (
          <PracticeProgramFilterModal
            onClose={() => {
              setFilterModalOpen(false);
            }}
            form={form}
            onSubmit={search}
          />
        )}
      </div>
    </div>
  );
};

export default PracticeProgramsSearch;
