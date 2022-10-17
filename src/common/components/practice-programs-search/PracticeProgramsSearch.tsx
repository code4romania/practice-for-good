import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { getCities } from '../../../services/nomenclature/nomenclature.service';
import { mapCitiesToSelect } from '../../helpers/Nomenclature.helper';
import DatePicker from '../date-picker/DatePicker';
import SearchField from '../input-field/SearchField';
import Select from '../select/Select';
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

  const loadOptionsCitiesSearch = async (searchWord: string) => {
    return getCities(searchWord).then((res: any[]) => res.map(mapCitiesToSelect));
  };


  return (
    <div className='bg-yellow w-full flex flex-col items-center px-56 py-10 gap-8'>
      <p className='font-titilliumBold text-4xl text-black'>Programe de practică la ONG-uri din România</p>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex w-full'>
          <Controller
            key={PracticeProgramsSearchConfig.name.key}
            name={PracticeProgramsSearchConfig.name.key}
            rules={PracticeProgramsSearchConfig.name.rules}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <SearchField
                  config={{
                    ...PracticeProgramsSearchConfig.name.config,
                    name: PracticeProgramsSearchConfig.name.key,
                    error: errors[PracticeProgramsSearchConfig.name.key]?.message,
                    defaultValue: value,
                    onChange: onChange,
                    id: 'search__term',
                  }}
                />
              );
            }}
          />
          <div className='w-1/3'>
            <Controller
              key={PracticeProgramsSearchConfig.name.key}
              name={PracticeProgramsSearchConfig.name.key}
              rules={PracticeProgramsSearchConfig.name.rules}
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <SearchField
                    config={{
                      ...PracticeProgramsSearchConfig.name.config,
                      name: PracticeProgramsSearchConfig.name.key,
                      error: errors[PracticeProgramsSearchConfig.name.key]?.message,
                      defaultValue: value,
                      onChange: onChange,
                      id: 'search__term',
                    }}
                  />
                );
              }}
            />
          </div>
        </div>

      </div>
    </div>)
}

export default PracticeProgramsSearch;