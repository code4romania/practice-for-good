import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import Loading from '../../common/components/loading/Loading';
import NoData from '../../common/components/no-data/NoData';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { useOrganization } from '../../services/organization/Organization.queries';
import ProgramItem from '../programs/components/ProgramItem';
import OrganizationDetails from './components/OrganizationDetails';

const Organization = () => {
  const { id } = useParams();

  const { t } = useTranslation('organization_details');

  const { data, isLoading, error, refetch } = useOrganization(id as string);

  return (
    <ShapeWrapper>
      <div className="w-full xl:px-60 px-10 lg:py-20 py-10">
        <>
          {data && !isLoading && (
            <div className="content">
              <OrganizationDetails organization={data}></OrganizationDetails>
              <h2 className="subtitle mt-10">{t('programs_title')}</h2>
              <Virtuoso
                useWindowScroll
                style={{ height: '100%', marginBottom: '24rem' }}
                overscan={200}
                data={data.practicePrograms}
                topItemCount={data.practicePrograms?.length}
                itemContent={(index, program) => <ProgramItem key={index} program={program} />}
              />
            </div>
          )}
          {error && !isLoading && <NoData retry={refetch}>{t('errors.get')}</NoData>}
          {isLoading && <Loading />}
        </>
      </div>
    </ShapeWrapper>
  );
};

export default Organization;
