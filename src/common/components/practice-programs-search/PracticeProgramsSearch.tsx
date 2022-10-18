import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { getCities } from '../../../services/nomenclature/nomenclature.service';
import { mapCitiesToSelect } from '../../helpers/Nomenclature.helper';
import DatePicker from '../date-picker/DatePicker';
import SearchField from '../search-field/SearchField';
import MultiSelect from '../select/Select';
import ServerSelect from '../server-select/ServerSelect';
import { PracticeProgramsSearchConfig } from './configs/PracticeProgramsSearch.config';

const PracticeProgramsSearch = () => {

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
    <div className='bg-yellow w-full flex flex-col items-center py-10 gap-8'>
      <p className='font-titilliumBold text-4xl text-black'>Programe de practică la ONG-uri din România</p>
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
          <div className='w-1/3 h-14'>
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
        <div className='flex w-full h-14 items-center h-14'>
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
    </div>)
}

export default PracticeProgramsSearch;