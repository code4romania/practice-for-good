/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise'
import './ServerSelect.css';

export interface ServerSelectConfig {
  label: string;
  isMulti: boolean;
  helperText?: string;
  error?: string;
  placeholder?: string;
  isClearable?: boolean;
  value: any[];
  onChange: any;
  loadOptions: any;
  id?: string;
}

const ServerSelect = ({
  placeholder,
  isClearable,
  isMulti,
  onChange,
  value,
  label,
  loadOptions,
  helperText,
  error,
  id,
}: ServerSelectConfig) => {
  const debouncedLoadOptions = debounce(loadOptions, 500, {
    leading: false,
  });

  return (
    <div>
      {label && (
        <label htmlFor="search" className="block text-base font-medium text-gray-700">
          {label}
        </label>
      )}
      <AsyncSelect
        id={`${id}__input`}
        cacheOptions
        placeholder={placeholder}
        classNamePrefix="reactselect"
        loadOptions={debouncedLoadOptions}
        onChange={onChange}
        isClearable={isClearable}
        isMulti={isMulti}
        defaultValue={value}
      />
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500 font-normal" id="search-helper">
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

export default ServerSelect;
