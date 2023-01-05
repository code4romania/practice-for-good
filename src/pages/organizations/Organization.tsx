import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';
import ListError from '../../common/components/list-error/ListError';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { useOrganization } from '../../services/organization/Organization.queries';
import ProgramItem from '../programs/components/ProgramItem';
import OrganizationDetails from './components/OrganizationDetails';
import { MENU_ROUTES_HREF } from '../../common/constants/Menu.constants';

const Organization = () => {
  const { organizationId } = useParams();

  const navigate = useNavigate();

  const { t } = useTranslation('organizations');

  const { data, isLoading, error, refetch } = useOrganization(organizationId as string);

  const onNavigate = (programId: number) => {
    navigate(
      `/${MENU_ROUTES_HREF.organizations}/${organizationId}/${MENU_ROUTES_HREF.practice_program}/${programId}`,
    );
  };

  return (
    <ShapeWrapper>
      <div className="w-full">
        <div className="wrapper pt-5">
          <Breadcrumbs />
          <>
            {data && !isLoading && (
              <div className="content">
                <OrganizationDetails organization={data}></OrganizationDetails>
                <h2 className="subtitle mt-10">{t('details.errors.get')}</h2>
                <Virtuoso
                  useWindowScroll
                  overscan={200}
                  data={data.practicePrograms}
                  topItemCount={data.practicePrograms?.length}
                  itemContent={(index, program) => (
                    <ProgramItem
                      key={index}
                      program={{ ...program, logo: data.logo, organizationName: data.name }}
                      onNavigate={onNavigate.bind(null, program.id)}
                    />
                  )}
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
            {error && !isLoading && (
              <ListError retry={refetch}>{t('details.errors.get')}</ListError>
            )}
          </>
        </div>
      </div>
    </ShapeWrapper>
  );
};

export default Organization;
