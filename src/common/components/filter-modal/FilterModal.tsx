import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '../../helpers/Tailwind.helper';
import logo from './../../../assets/images/logo.svg';
import { XIcon } from '@heroicons/react/solid';

interface FilterModalProps {
  title: string;
  description: string;
  closeBtnLabel: string;
  confirmBtnLabel: string;
  confirmButtonStyle?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const FilterModal = ({
  title,
  description,
  closeBtnLabel,
  confirmBtnLabel,
  confirmButtonStyle,
  onClose,
  onConfirm,
}: FilterModalProps) => {
  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto h-full">
          <div className="flex justify-center h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all h-full w-full">
                <div className='relative w-full h-full'>
                  <div className="flex justify-between items-center">
                    <img src={logo} alt="Code 4 Romania - ONG Hub" className="h-16" />
                    <button onClick={onClose}><XIcon className='w-7 h-7' /></button>
                  </div>
                  <div className='h-1 bg-gray-200 my-8'></div>
                  <div className='flex  flex-col w-full justify-between'>
                    <div className='flex'>
                      Filtrele
                    </div>
                    <div className="flex w-full absolute bottom-4">
                      <button
                        type="button"
                        className='flex bg-yellow w-full rounded font-titilliumSemiBold text-xl items-center justify-center p-3'
                        onClick={onConfirm}
                      >
                        Aplica filtre
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FilterModal;
