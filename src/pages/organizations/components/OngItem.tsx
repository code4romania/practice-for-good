import React from 'react';
import { useTranslation } from 'react-i18next';
import { Organization } from '../../../common/interfaces/Organization.interface';

const OngItem = ({ organization }: { organization: Organization }) => {
  const { t } = useTranslation('organizations');

  return (
    <div className="w-8/12 bg-white rounded-lg p-8">
      <div className="flex flex-col">
        <div className="aspect-square lg:w-32 sm:w-24 w-full lg:min-w-[8rem] sm:min-w-[6rem] bg-gray-100 sm:max-h-full max-h-[8rem]">
          {organization.organizationGeneral.logo && (
            <img src={organization.organizationGeneral.logo}></img>
          )}
        </div>
        <div>
          <p className="text-xl">{organization.organizationGeneral.name}</p>
          <p className="w-8/12">{organization.organizationGeneral.shortDescription}</p>
        </div>
        <div>
          <button className="yellow-button" onClick={() => console.log('Not yet implemented')}>
            {t('action')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngItem;
