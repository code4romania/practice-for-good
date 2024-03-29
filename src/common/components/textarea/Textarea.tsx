import React from 'react';
import { TextAreaConfig } from './TextareaConfig.interface';
import { classNames } from '../../helpers/Tailwind.helper';

const Textarea = (props: { config: Partial<TextAreaConfig>; readonly?: boolean }) => {
  return (
    <div className="relative w-full">
      {props.config.label && (
        <label htmlFor={`${props.config.name}__input`} className="article text-gray-700">
          {props.config.label}
        </label>
      )}

      <div className="mt-1 relative rounded-md">
        {props.readonly && <span>{props.config.defaultValue}</span>}
        {!props.readonly && (
          <textarea
            rows={4}
            name={props.config.name}
            onChange={props.config.onChange}
            className={classNames(
              props.config.error
                ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 '
                : 'focus:ring-indigo-500 focus:border-indigo-500',
              'block w-full border py-2 px-3 border-gray-300 shadow-sm body-text rounded-md outline-none focus:shadow-input',
            )}
            placeholder={props.config.placeholder}
            defaultValue={props.config.defaultValue}
            aria-invalid={props.config.error ? 'true' : 'false'}
            id={`${props.config.name}__input`}
          ></textarea>
        )}
      </div>
      {!props.config.error && (
        <p className="mt-1 text-sm text-gray-500 font-normal" id="email-description">
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

export default Textarea;
