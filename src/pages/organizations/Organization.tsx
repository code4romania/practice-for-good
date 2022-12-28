import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';
import ListError from '../../common/components/list-error/ListError';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { useOrganization } from '../../services/organization/Organization.queries';
import ProgramItem from '../programs/components/ProgramItem';
import OrganizationDetails from './components/OrganizationDetails';

const Organization = () => {
  const { id } = useParams();

  const { t } = useTranslation('organizations');

  const { data, isLoading, error, refetch } = useOrganization(id as string);

  return (
    <ShapeWrapper>
      <div className="w-full xl:px-60 px-4 lg:py-20 py-10">
        <>
          {data && !isLoading && (
            <div className="content">
              <OrganizationDetails organization={data}></OrganizationDetails>
              <h2 className="subtitle mt-10">{t('details.errors.get')}</h2>
              <Virtuoso
                useWindowScroll
                style={{ height: '100%', marginBottom: '24rem' }}
                overscan={200}
                data={data.practicePrograms}
                topItemCount={data.practicePrograms?.length}
                itemContent={(index, program) => <ProgramItem key={index} program={program} />}
                components={{
                  Footer: () => (
                    <InfiniteScrollFooter
                      hasNoData={data?.practicePrograms?.length === 0}
                      isLoading={isLoading}
                    />
                  ),
                }}
              />
            </div>
          )}
          {error && !isLoading && <ListError retry={refetch}>{t('details.errors.get')}</ListError>}
        </>
      </div>
    </ShapeWrapper>
  );
};

export default Organization;
