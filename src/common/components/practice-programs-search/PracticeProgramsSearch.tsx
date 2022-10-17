import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { getCities } from '../../../services/nomenclature/nomenclature.service';
import { mapCitiesToSelect } from '../../helpers/Nomenclature.helper';
import DatePicker from '../date-picker/DatePicker';
import InputField from '../input-field/InputField';
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
    <div className='bg-yellow w-full flex flex-col items-center px-40 py-10 gap-8'>
      <p className='font-titilliumBold text-4xl text-black'>Programe de practică la ONG-uri din România</p>
      <div className='flex flex-col gap-4'>
        <Controller
          key={PracticeProgramsSearchConfig.name.key}
          name={PracticeProgramsSearchConfig.name.key}
          rules={PracticeProgramsSearchConfig.name.rules}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputField
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
        <Controller
          key={PracticeProgramsSearchConfig.name.key}
          name={PracticeProgramsSearchConfig.name.key}
          rules={PracticeProgramsSearchConfig.name.rules}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <ServerSelect
                value={value}
                label={PracticeProgramsSearchConfig.name.label}
                isMulti={true}
                isClearable={false}
                placeholder={''}
                helperText={PracticeProgramsSearchConfig.name.helperText}
                error={errors[PracticeProgramsSearchConfig.name.key]?.message?.toString()}
                onChange={onChange}
                loadOptions={loadOptionsCitiesSearch}
              />
            );
          }}
        />
        <DatePicker />
      </div>
    </div>)
}

export default PracticeProgramsSearch;