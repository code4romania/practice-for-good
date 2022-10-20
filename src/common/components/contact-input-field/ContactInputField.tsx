import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { classNames } from '../../helpers/Tailwind.helper';

const ContactInputField = (props: {
  config: Partial<any>;
  readonly?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="relative w-full">
      {props.config.label && (
        <label htmlFor="email" className="font-titillium text-gray-700">
          {props.config.label}
        </label>
      )}
      <div className="mt-1 relative rounded-md w-10/12">
        {!props.readonly && props.config.addOn && props.config.addOn()}
        {props.readonly && <span>{props.config.defaultValue || '-'}</span>}
        {!props.readonly && (
          <input
            type={props.config.type}
            name={props.config.name}
            onChange={props.config.onChange}
            onBlur={props.config.onBlur}
            className={classNames(
              props.config.error
                ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                : '',
              props.config.addOn ? 'pl-14' : 'pl-4',
              'block rounded-md w-full border border-gray-300 shadow-sm sm:text-xl text-small disabled:bg-gray-100 py-9px px-13px font-titillium md:w-11/12',
            )}
            placeholder={props.config.placeholder}
            defaultValue={props.config.defaultValue}
            aria-invalid={props.config.error ? 'true' : 'false'}
            disabled={props.disabled}
            id={`${props.config.id}__input`}
          />
        )}
        {props.config.error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {!props.config.error && (
        <p className="mt-1 text-small text-gray-500 font-titillium" id="email-description">
          {props.config.helperText}
        </p>
      )}
      {props.config.error && (
        <p className="mt-1 text-small text-red-600" id={`${props.config.id}__input-error`}>
          {props.config.error}
        </p>
      )}
    </div>
  );
};

export default ContactInputField;