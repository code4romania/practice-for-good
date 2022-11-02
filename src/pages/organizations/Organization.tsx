import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../common/components/loading/Loading';
import NoData from '../../common/components/no-data/NoData';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { useOrganization } from '../../services/organization/Organization.queries';
import OrganizationDetails from './components/OrganizationDetails';

const Organization = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useOrganization(id as string);

  return (
    <ShapeWrapper>
      <div className="w-full xl:px-60 px-10 lg:py-20 py-10">
        {data && !isLoading && <OrganizationDetails organization={data}></OrganizationDetails>}
        {error && !isLoading && <NoData>Eroare la incarcarea datelor</NoData>}
        {isLoading && <Loading />}
      </div>
    </ShapeWrapper>
  );
};

export default Organization;
