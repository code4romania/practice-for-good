import React from 'react';
import NGOSearch from '../../common/components/ngo-search/NGOSearch';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { ORGANIZATIONS } from '../../common/constants/nomenclature.constants';
import OrganizationsList from './components/OrganizationsList';

const Organizations = () => {
  return (
    <ShapeWrapper>
      <div className="bg-yellow w-full">
        <NGOSearch showFilters={true} />
      </div>
      <OrganizationsList
        organizations={ORGANIZATIONS.items}
        total={ORGANIZATIONS.meta.itemCount}
      ></OrganizationsList>
    </ShapeWrapper>
  );
};

export default Organizations;
