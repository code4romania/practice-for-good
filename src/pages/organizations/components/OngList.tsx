import React from 'react';
import { useTranslation } from 'react-i18next';
import { Organization } from '../../../common/interfaces/Organization.interface';
import OngItem from './OngItem';

interface OngsProps {
  ongs: Organization[];
  total: number;
}

const OngList = ({ ongs, total }: OngsProps) => {
  const { t } = useTranslation('organizations');

  return (
    <div className="mx-auto">
      <p className="title text-center pb-8">{`${total} ${
        total > 1 ? t('many_organizations_title') : t('one_organization_title')
      }`}</p>
      <div className="grid text-left grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 mx-10">
        {ongs.map((ong: Organization, index) => (
          <OngItem key={index} organization={ong}></OngItem>
        ))}
      </div>
    </div>
  );
};

export default OngList;
