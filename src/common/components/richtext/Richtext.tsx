import React from 'react';
import { RichtextConfig } from './RichtextConfig.interface';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

const toolbarOptions = {
  options: ['inline', 'fontSize', 'list', 'textAlign', 'link'],
  inline: {
    inDropdown: false,
    options: ['bold', 'italic', 'underline'],
    bold: { className: 'font-titilliumBold' },
    italic: { className: 'italic' },
    underline: { className: 'underline' },
  },
  fontSize: { options: [16, 18, 24] },
};

const Richtext = (props: {
  config: Partial<RichtextConfig>;
  readonly?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="relative w-full">
      {props.config.label && <label className="article text-gray-700">{props.config.label}</label>}
      <div className="mt-1 relative rounded-md">
        {!props.readonly && (
          <Editor
            editorClassName="rounded-b-md shadow-sm border border-gray-200 px-3"
            toolbarStyle={{ marginBottom: 0 }}
            onChange={props.config.onChange}
            toolbar={toolbarOptions}
          />
        )}
        {props.config.error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
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

export default Richtext;
