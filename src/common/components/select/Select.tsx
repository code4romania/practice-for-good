/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import Select from 'react-select';
import './Select.css';

export interface MultiSelectConfig {
  label?: string;
  helperText?: string;
  error?: string;
  placeholder?: string;
  isClearable?: boolean;
  value: any[];
  onChange: any;
  options: any[];
  id?: string;
  isMulti: boolean;
}

const MultiSelect = ({
  placeholder,
  isClearable,
  onChange,
  value,
  label,
  helperText,
  error,
  options,
  id,
  isMulti
}: MultiSelectConfig) => {
  return (
    <div className='w-full'>
      <Select
        placeholder={placeholder}
        classNamePrefix="reactselect"
        onChange={onChange}
        isClearable={isClearable}
        isMulti={isMulti}
        defaultValue={value}
        options={options}
        id={id}
      />
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500 font-normal" id="email-description">
          {helperText}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${id}__input-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default MultiSelect;
