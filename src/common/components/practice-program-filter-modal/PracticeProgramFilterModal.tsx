import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import logo from './../../../assets/images/logo.svg';
import { XIcon } from '@heroicons/react/solid';
import { Controller } from 'react-hook-form';
import { PracticeProgramsSearchConfig } from '../practice-programs-search/configs/PracticeProgramsSearch.config';
import ServerSelect from '../server-select/ServerSelect';
import { mapItemToSelect } from '../../helpers/Nomenclature.helper';
import { useNomenclature } from '../../../store/nomenclatures/Nomenclatures.selectors';
import DatePicker from '../date-picker/DatePicker';
import MultiSelect from '../select/Select';
import { useTranslation } from 'react-i18next';
import { getCities } from '../../../services/nomenclature/Nomenclature.service';
import { mapCitiesToSelect } from '../../helpers/Format.helper';

interface PracticeProgramFilterModalProps {
  onClose: () => void;
  form: any;
  onSubmit: (data: any) => void;
}

const PracticeProgramFilterModal = ({
  onClose,
  form,
  onSubmit,
}: PracticeProgramFilterModalProps) => {
  const { t } = useTranslation();
  const { domains, faculties } = useNomenclature();

  const { handleSubmit, control, reset } = form;

  const loadOptionsLocationSearch = async (searchWord: string) => {
    return getCities({ search: searchWord }).then((cities) => cities.map(mapCitiesToSelect));
  };

  const onApply = (data: any) => {
    onSubmit(data);
    onClose();
  };

  const onReset = () => {
    reset({});
    handleSubmit(onApply)();
  };

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
              <Dialog.Panel className="bg-white p-4 text-left shadow-xl transform transition-all min-h-full h-fit w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <img src={logo} alt="Code 4 Romania - ONG Hub" className="h-16" />
                  <button aria-label={t('common:close')} onClick={onClose}>
                    <XIcon className="w-7 h-7" />
                  </button>
                </div>
                <div className="h-1 bg-gray-200"></div>
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-col w-full gap-4">
                    <Controller
                      key={PracticeProgramsSearchConfig.locationId.key}
                      name={PracticeProgramsSearchConfig.locationId.key}
                      rules={PracticeProgramsSearchConfig.locationId.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <ServerSelect
                            id="programs-search-location"
                            value={value}
                            isMulti={false}
                            isClearable
                            placeholder={PracticeProgramsSearchConfig.locationId.placeholder}
                            onChange={onChange}
                            loadOptions={loadOptionsLocationSearch}
                            addOn={PracticeProgramsSearchConfig.locationId.addOn}
                          />
                        );
                      }}
                    />
                    <Controller
                      key={PracticeProgramsSearchConfig.faculties.key}
                      name={PracticeProgramsSearchConfig.faculties.key}
                      rules={PracticeProgramsSearchConfig.faculties.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <MultiSelect
                            id="programs-search-faculties"
                            value={value}
                            isMulti={true}
                            isClearable
                            placeholder={PracticeProgramsSearchConfig.faculties.placeholder}
                            onChange={onChange}
                            options={faculties.map(mapItemToSelect)}
                            icon={PracticeProgramsSearchConfig.faculties.icon}
                          />
                        );
                      }}
                    />
                    <Controller
                      key={PracticeProgramsSearchConfig.start.key}
                      name={PracticeProgramsSearchConfig.start.key}
                      rules={PracticeProgramsSearchConfig.start.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            defaultValue={value}
                            onChange={onChange}
                            placeholder={PracticeProgramsSearchConfig.start.placeholder}
                          />
                        );
                      }}
                    />
                    <Controller
                      key={PracticeProgramsSearchConfig.end.key}
                      name={PracticeProgramsSearchConfig.end.key}
                      rules={PracticeProgramsSearchConfig.end.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            defaultValue={value}
                            onChange={onChange}
                            placeholder={PracticeProgramsSearchConfig.end.placeholder}
                          />
                        );
                      }}
                    />
                    <Controller
                      key={PracticeProgramsSearchConfig.workingHours.key}
                      name={PracticeProgramsSearchConfig.workingHours.key}
                      rules={PracticeProgramsSearchConfig.workingHours.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <MultiSelect
                            id="create-organization-workingHours"
                            value={value}
                            isClearable
                            isMulti={false}
                            onChange={onChange}
                            placeholder={
                              PracticeProgramsSearchConfig.workingHours.config.placeholder
                            }
                            options={PracticeProgramsSearchConfig.workingHours.config.collection}
                            icon={PracticeProgramsSearchConfig.workingHours.icon}
                          />
                        );
                      }}
                    />
                    <Controller
                      key={PracticeProgramsSearchConfig.domains.key}
                      name={PracticeProgramsSearchConfig.domains.key}
                      rules={PracticeProgramsSearchConfig.domains.rules}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <MultiSelect
                            id="create-organization-domains"
                            value={value}
                            isClearable
                            isMulti={true}
                            onChange={onChange}
                            placeholder={PracticeProgramsSearchConfig.domains.config.placeholder}
                            options={domains.map(mapItemToSelect)}
                            icon={PracticeProgramsSearchConfig.domains.icon}
                          />
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <button
                    aria-label={t('filter_modal:apply')}
                    type="button"
                    className="flex bg-yellow-500 w-full rounded font-titilliumSemiBold text-xl items-center justify-center p-3"
                    onClick={handleSubmit(onApply)}
                  >
                    {t('filter_modal:apply')}
                  </button>
                  <button
                    aria-label={t('filter_modal:reset')}
                    type="button"
                    className="flex bg-gray-100 w-full rounded font-titilliumSemiBold text-xl items-center justify-center p-3"
                    onClick={onReset}
                  >
                    {t('filter_modal:reset')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PracticeProgramFilterModal;
