import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid';
import { Controller, useForm } from 'react-hook-form';
import { getCities } from '../../../services/nomenclature/nomenclature.service';
import { mapCitiesToSelect } from '../../helpers/Nomenclature.helper';
import DatePicker from '../date-picker/DatePicker';
import SearchField from '../search-field/SearchField';
import MultiSelect from '../select/Select';
import ServerSelect from '../server-select/ServerSelect';
import { PracticeProgramsSearchConfig } from './configs/PracticeProgramsSearch.config';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import FilterModal from '../filter-modal/FilterModal';
import { t } from 'i18next';

const PracticeProgramsSearch = (props: { showFilters: boolean }) => {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const loadOptionsLocationSearch = async (searchWord: string) => {
    return getCities(searchWord).then((res: any[]) => res.map(mapCitiesToSelect));
  };

  return (
    <div className='bg-yellow w-full flex flex-col items-center px-2 sm:px-4 py-10 gap-8'>
      <p className='font-titilliumBold sm:text-4xl text-xl  text-black'>Programe de practică la ONG-uri din România</p>
      <div className='flex flex-col gap-4 max-w-5xl w-full justify-items-center'>
        <div className='flex w-full items-center h-14'>
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
          {props.showFilters && (
            <button
              id="create-organization-activity__button-back"
              type="button"
              className="text-sm sm:text-base sm:hidden text-yellow bg-black  px-4 flex items-center justify-center h-full"
              onClick={() => alert('Not now')}
            >
              <SearchIcon className='w-5 h-5' />
            </button>
          )}

          <div className='w-1/3 h-14 hidden sm:flex'>
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
                    isClearable={false}
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
        {props.showFilters && (
          <div className='sm:hidden flex justify-flex-start h-14 items-center bg-white px-4 gap-2 rounded-md shadow w-fit cursor-pointer'
            onClick={() => setFilterModalOpen(true)}>
            <p
              id="create-organization-activity__button-back"
              className="text-sm sm:text-base  h-full flex items-center"
            >
              Filtre
            </p>
            <AdjustmentsIcon className='w-5 h-5' />
            <p
              id="create-organization-activity__button-back"
              className="text-base rounded-full bg-yellow p-2 flex items-center w-10 items-center justify-center"
            >
              5
            </p>
          </div>
        )}

        <div className='hidden sm:flex w-full h-14 items-center h-14'>
          <Controller
            key={PracticeProgramsSearchConfig.faculties.key}
            name={PracticeProgramsSearchConfig.faculties.key}
            rules={PracticeProgramsSearchConfig.faculties.rules}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <ServerSelect
                  id="programs-search-faculties"
                  value={value}
                  isMulti={true}
                  isClearable={false}
                  placeholder={PracticeProgramsSearchConfig.faculties.placeholder}
                  onChange={onChange}
                  loadOptions={loadOptionsLocationSearch}
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
              return (<DatePicker
                defaultValue={value ? value : undefined}
                onChange={onChange}
                placeholder={PracticeProgramsSearchConfig.start.placeholder}
              />
              )
            }} />
          <Controller
            key={PracticeProgramsSearchConfig.end.key}
            name={PracticeProgramsSearchConfig.end.key}
            rules={PracticeProgramsSearchConfig.end.rules}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (<DatePicker
                defaultValue={value ? value : undefined}
                onChange={onChange}
                placeholder={PracticeProgramsSearchConfig.end.placeholder}
              />
              )
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
          <button
            id="create-organization-activity__button-back"
            type="button"
            className="text-sm sm:text-base text-yellow bg-black w-full h-full"
            onClick={() => alert('Not now')}
          >
            Cauta
          </button>
        </div>
      </div>
      {isFilterModalOpen && (
        <FilterModal
          title={t('reject_request_modal.title')}
          description={t('reject_request_modal.description')}
          closeBtnLabel={t('common:back')}
          confirmBtnLabel={t('common:delete')}
          onClose={() => { setFilterModalOpen(false) }}
          onConfirm={() => { setFilterModalOpen(false) }}
        />
      )}
    </div>)
}

export default PracticeProgramsSearch;