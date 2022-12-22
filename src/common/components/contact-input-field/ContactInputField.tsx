import React from 'react';
import { classNames } from '../../helpers/Tailwind.helper';
import { InputFieldConfig } from '../input-field/InputFieldConfig.interface';

const ContactInputField = (props: {
  config: Partial<InputFieldConfig>;
  readonly?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="relative w-full">
      {props.config.label && (
        <label htmlFor="email" className="article text-gray-700">
          {props.config.label}
        </label>
      )}
      <div className="mt-1 relative rounded-md">
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
              'block rounded-md w-full border border-gray-300 shadow-sm body-text disabled:bg-gray-100 py-2 px-3',
            )}
            placeholder={props.config.placeholder}
            defaultValue={props.config.defaultValue}
            aria-invalid={props.config.error ? 'true' : 'false'}
            disabled={props.disabled}
            id={`${props.config.id}__input`}
          />
        )}
      </div>
      {!props.config.error && (
        <p className="mt-1 text-sm text-gray-500" id="email-description">
          {props.config.helperText}
        </p>
      )}
      {props.config.error && (
        <p className="mt-1 text-sm text-red-600" id={`${props.config.id}__input-error`}>
          {props.config.error}
        </p>
      )}
    </div>
  );
};

export default ContactInputField;
