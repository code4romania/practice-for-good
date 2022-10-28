import React from 'react';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { ORGANIZATION } from '../../common/constants/nomenclature.constants';
import OrganizationDetails from './components/OrganizationDetails';

const Organization = () => {
  return (
    <ShapeWrapper>
      <div className="w-full xl:px-60 px-10 lg:py-20 py-10">
        <OrganizationDetails organization={ORGANIZATION}></OrganizationDetails>
      </div>
    </ShapeWrapper>
  );
};

export default Organization;
