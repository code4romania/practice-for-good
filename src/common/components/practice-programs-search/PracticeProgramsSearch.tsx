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
  useCitiesQuery,
  useDomainsQuery,
  useFacultiesQuery,
} from '../../../services/nomenclature/Nomeclature.queries';
import ShapeWrapper from '../shape-wrapper/ShapeWrapper';
import PracticeProgramFilterModal from '../practice-program-filter-modal/PracticeProgramFilterModal';
import { useQueryParams, encodeQueryParams } from 'use-query-params';
import { stringify } from 'query-string';
import { getDomains, getFaculties } from '../../../services/nomenclature/Nomenclature.service';
import { WorkingHours } from '../../enums/WorkingHours.enum';
import { POGRAMS_QUERY_PARAMS } from '../../constants/Programs.constants';
import { countFilters } from '../../helpers/Filters.helpers';

interface PracticeProgramsSearchProps {
  children?: React.ReactNode;
  onSearchCallback?: (search: string) => void;
}

const PracticeProgramsSearch = (props: PracticeProgramsSearchProps) => {
  const { t } = useTranslation('practice_programs_search');

  // filter modal state
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [filtersCount, setFiltersCount] = useState(0);
  // search state
  const [searchLocationTerm, seSearchtLocationTerm] = useState('');
  // nomenclature values
  const { cities, domains, faculties } = useNomenclature();

  // query params state
  const [query, setQuery] = useQueryParams(POGRAMS_QUERY_PARAMS);

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
  // TODO: This should be at cell level, each cell should request it's own data
  useCitiesQuery(searchLocationTerm);
  useDomainsQuery();
  useFacultiesQuery();

  useEffect(() => {
    (async () => {
      const filters = await initFilters();
      reset({ ...filters });
    })();
  }, []);

  const search = (data: any) => {
    // 1. map query values
    const selectedFaculties = data?.faculties?.map((faculty: ISelectData) => faculty.value);
    const selectedDomains = data?.domains?.map((domain: ISelectData) => domain.value);
    const queryValues = {
      search: data?.search,
      workingHours: data?.workingHours?.value,
      location: data?.location?.label,
      faculties: selectedFaculties?.length > 0 ? selectedFaculties : undefined,
      domains: selectedDomains?.length > 0 ? selectedDomains : undefined,
      start: data?.start,
      end: data?.end,
      page: 1,
    };

    // 2. set query params
    setQuery(queryValues);
    // 3 update filters cound
    setFiltersCount(countFilters(queryValues));

    // 2. redirect with correct query set
    props.onSearchCallback &&
      props.onSearchCallback(`?${stringify(encodeQueryParams(POGRAMS_QUERY_PARAMS, queryValues))}`);
  };

  const loadOptionsLocationSearch = async (searchWord: string) => {
    seSearchtLocationTerm(searchWord);
    return cities.map(mapItemToSelect);
  };

  // TODO: These operations should take place in each form cell which requires server data
  const initFilters = async () => {
    const {
      location,
      domains: queryDomains,
      faculties: queryFaculties,
      workingHours,
      ...otherQueryParams
    } = query;

    // init should get me the correct values for
    let selectedLocation, selectedFaculties, selectedWorkingHours, selectedDomains;

    // 1. city
    if (location) {
      const citiesResults = await loadOptionsLocationSearch(location);
      selectedLocation = citiesResults[0];
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

    setFiltersCount(countFilters(query));

    return {
      location: selectedLocation,
      domains: selectedDomains,
      faculties: selectedFaculties,
      workingHours: selectedWorkingHours,
      ...otherQueryParams,
    };
  };

  return (
    <>
      <div className="bg-yellow w-full flex flex-col items-center px-2 sm:px-4 py-10 gap-8">
        <p className="font-titilliumBold sm:text-4xl text-xl  text-black">{t('title')}</p>
        <div className="flex flex-col gap-4 max-w-5xl w-full justify-items-center">
          <div className="flex w-full items-center h-14">
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
                      id: 'programs-search-search__term',
                    }}
                  />
                );
              }}
            />
            <button
              type="button"
              className="text-sm sm:text-base sm:hidden text-yellow bg-black  px-4 flex items-center justify-center h-full"
              onClick={handleSubmit(search)}
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <div className="w-1/3 h-14 hidden sm:flex">
              <Controller
                key={PracticeProgramsSearchConfig.location.key}
                name={PracticeProgramsSearchConfig.location.key}
                rules={PracticeProgramsSearchConfig.location.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <ServerSelect
                      id="programs-search-location"
                      value={value}
                      isMulti={false}
                      isClearable={false}
                      placeholder={PracticeProgramsSearchConfig.location.placeholder}
                      onChange={onChange}
                      loadOptions={loadOptionsLocationSearch}
                      addOn={PracticeProgramsSearchConfig.location.addOn}
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
              {t('filters')}
            </p>
            <AdjustmentsIcon className="w-5 h-5" />
            {filtersCount > 0 && (
              <p
                id="create-organization-activity__button-back"
                className="text-base rounded-full bg-yellow p-2 flex items-center w-10 justify-center"
              >
                {filtersCount}
              </p>
            )}
          </div>

          <div className="hidden sm:flex w-full h-14 items-center">
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
                    isClearable={false}
                    placeholder={PracticeProgramsSearchConfig.faculties.placeholder}
                    onChange={onChange}
                    options={faculties.map(mapItemToSelect)}
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
                    defaultValue={value ? value : undefined}
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
                    defaultValue={value ? value : undefined}
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
                    isClearable={false}
                    isMulti={false}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.workingHours.config.placeholder}
                    options={PracticeProgramsSearchConfig.workingHours.config.collection}
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
                    isClearable={false}
                    isMulti={true}
                    onChange={onChange}
                    placeholder={PracticeProgramsSearchConfig.domains.config.placeholder}
                    options={domains.map(mapItemToSelect)}
                  />
                );
              }}
            />
            <button
              id="create-organization-activity__button-back"
              type="button"
              className="text-sm sm:text-base text-yellow bg-black w-full h-full"
              onClick={handleSubmit(search)}
            >
              {t('searchWord')}
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
      <ShapeWrapper>{props.children}</ShapeWrapper>
    </>
  );
};

export default PracticeProgramsSearch;
