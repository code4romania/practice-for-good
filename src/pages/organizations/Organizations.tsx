import React from 'react';
import { ORGANIZATIONS } from '../../common/constants/nomenclature.constants';
import OngList from './components/OngList';

const Organizations = () => {
  return <OngList ongs={ORGANIZATIONS.items} total={ORGANIZATIONS.meta.itemCount}></OngList>;
};

export default Organizations;
