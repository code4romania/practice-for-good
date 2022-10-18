import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactConfig } from './configs/Contact.config';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../common/components/input-field/InputField';

const Contact = () => {
  const { t } = useTranslation('contact');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <div className="mx-10 max-w-screen-xl grid lg:mx-10 xl:mx-auto xl:grid-cols-2">
      <div className="font-titillium order-1 xl:col-span-2">
        <p className="text-big">Contactează-ne</p>
        <p className="text-small">
          Centru Civic este primul centralizator al serviciilor pe care societatea civilă le pune la
          dispoziția cetățenilor români. Soluția a pornit ca un agregator al tuturor aplicațiilor
          civice dezvoltate de ONG-uri, instituții sau cetăţeni din România. În noua versiune,
          Centru Civic va deveni locul unde, printr-o căutare simplă, fiecare cetățean va avea la
          dispoziție informațiile necesare despre toate serviciile oferite de sectorul ONG care
          vizează o anumită problemă, scoțând în evidență importanța și amploarea sectorului
          non-profit în societatea românească.
        </p>
        <p></p>
      </div>
      <div className="order-2 xl:col-span-2">
        <form className="flex flex-col">
          <div className="flex gap-x-6">
            <div className="flex-1">
              <Controller
                key={ContactConfig.name.key}
                name={ContactConfig.name.name}
                rules={ContactConfig.name.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputField
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
            <div className="flex-1"></div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex-1">
              <Controller
                key={ContactConfig.email.key}
                name={ContactConfig.email.name}
                rules={ContactConfig.email.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputField
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
            <div className="flex-1"></div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex-1">
              <Controller
                key={ContactConfig.message.key}
                name={ContactConfig.message.name}
                rules={ContactConfig.message.rules}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputField
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
            <div className="flex-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
