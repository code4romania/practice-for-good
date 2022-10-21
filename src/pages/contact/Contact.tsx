import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactConfig } from './configs/Contact.config';
import { Controller, useForm } from 'react-hook-form';
import ContactInputField from '../../common/components/contact-input-field/ContactInputField';
import Textarea from '../../common/components/textarea/Textarea';
import confirmLogo from '../../assets/images/confirm-icon.svg';

const Contact = () => {
  const [showForm, setShowForm] = useState(true);
  const { t } = useTranslation('contact');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSendMail = () => {
    console.log('Not yet implemented');
    reset();
    setShowForm(false);
  };

  return (
    <div className="mx-10 max-w-screen-xl lg:mx-10 xl:mx-auto">
      <div className="grid lg:grid-cols-2">
        <div className="font-titillium">
          <p className="text-big my-5 text-left">{t('contact_us')}</p>
          <p className="text-small leading-7 text-left my-10 md:w-11/12 lg:w-10/12 xl:mx-0 xl:w-10/12">
            {t('description_1')}
          </p>
          <p className="text-small leading-7 text-left mt-10 md:w-11/12 lg:w-10/12 xl:mx-0 xl:w-10/12">
            {t('description_2')}
          </p>
        </div>
        {showForm && (
          <div className="mt-5 lg:mt-12">
            <form className="flex flex-col mt-5 lg:mt-12">
              <div className="flex gap-x-6 mb-8">
                <div className="flex-1">
                  <Controller
                    key={ContactConfig.name.key}
                    name={ContactConfig.name.key}
                    rules={ContactConfig.name.rules}
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <ContactInputField
                          config={{
                            ...ContactConfig.name.config,
                            name: ContactConfig.name.key,
                            error: errors[ContactConfig.name?.key]?.message,
                            defaultValue: value,
                            onChange: onChange,
                          }}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-x-6 mb-8">
                <div className="flex-1">
                  <Controller
                    key={ContactConfig.email.key}
                    name={ContactConfig.email.key}
                    rules={ContactConfig.email.rules}
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <ContactInputField
                          config={{
                            ...ContactConfig.email.config,
                            name: ContactConfig.email.key,
                            error: errors[ContactConfig.email?.key]?.message,
                            defaultValue: value,
                            onChange: onChange,
                          }}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-x-6 mb-8">
                <div className="flex-1">
                  <Controller
                    key={ContactConfig.message.key}
                    name={ContactConfig.message.key}
                    rules={ContactConfig.message.rules}
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Textarea
                          config={{
                            ...ContactConfig.message.config,
                            name: ContactConfig.message.key,
                            error: errors[ContactConfig.message?.key]?.message,
                            defaultValue: value,
                            onChange: onChange,
                          }}
                        />
                      );
                    }}
                  />
                </div>
              </div>
            </form>
            <button
              type="button"
              className="w-3/5 md:w-2/5 yellow-long-button text-center mb-10"
              onClick={onSendMail}
            >
              {t('send')}
            </button>
          </div>
        )}
        {!showForm && (
          <div className="mt-5 h-72 lg:mt-12">
            <img src={confirmLogo} alt="Green Checkmark" className="mx-auto pt-5 my-10 w-1/12" />
            <p className="text-center text-medium mb-5">{t('contact_message_1')}</p>
            <p className="text-center text-medium mb-10">{t('contact_message_2')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
