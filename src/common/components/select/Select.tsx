/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { classNames } from '../../helpers/Tailwind.helper';

const Select = (props: {
  config: {
    label: string;
    collection: any[];
    displayedAttribute: string;
    id?: string;
  };
  selected?: any;
  error?: string | any;
  readonly?: boolean;
  onChange: any;
  multi?: boolean;
}) => {
  return (
    <div className="relative w-full">
      <Listbox value={props.selected} onChange={props.onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-normal font-medium text-gray-700 pb-1">
              {props.config.label}
            </Listbox.Label>
            {props.readonly && (
              <span className="text-normal font-normal text-gray-900">
                {props.selected &&
                  (props.config.displayedAttribute
                    ? props.selected[props.config.displayedAttribute]
                    : props.selected)}
              </span>
            )}
            {!props.readonly && (
              <div className=" relative">
                <Listbox.Button
                  itemID={props.config.id}
                  className="h-[44px] bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <span className="block truncate">
                    {(props.config.displayedAttribute && props.selected
                      ? props.selected[props.config.displayedAttribute]
                      : props.selected) || (
                        <span className="text-gray-700 text-normal font-normal">
                          {props.config.label}
                        </span>
                      )}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {props.config.collection.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-blue-500' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9',
                          )
                        }
                        value={item}
                        itemID={`${props.config.id}__select-${item.name}`}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate',
                              )}
                            >
                              {props.config.displayedAttribute
                                ? item[props.config.displayedAttribute]
                                : item}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-blue-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </>
        )}
      </Listbox>
      {props.error && (
        <p className="mt-1 text-sm text-red-600" id={`${props.config.id}__error`}>
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Select;
