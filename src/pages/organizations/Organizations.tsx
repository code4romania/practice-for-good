import React from 'react';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid } from 'react-virtuoso';
import { useQueryParams } from 'use-query-params';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';
import NGOSearch from '../../common/components/ngo-search/NGOSearch';
import ListError from '../../common/components/list-error/ListError';
import { ORGANIZATIONS_QUERY_PARAMS } from '../../common/constants/Organizations.constants';
import OrganizationItem from './components/OrganizationItem';
import { useOrganizationsInfiniteQuery } from '../../services/organization/Organization.queries';
import { OrganizationFlat } from '../../common/interfaces/OrganizationFlat.interface';
import { mapPagesToItems } from '../../common/helpers/Format.helper';

const Organizations = () => {
  const { t } = useTranslation('organizations');
  const [query] = useQueryParams(ORGANIZATIONS_QUERY_PARAMS);

  const { data, isFetching, fetchNextPage, hasNextPage, error, refetch } =
    useOrganizationsInfiniteQuery(query as any);

  const loadMore = () => {
    if (!isFetching && hasNextPage) fetchNextPage();
  };

  return (
    <section className="w-full">
      <NGOSearch showFilters />
      {error && !isFetching ? (
        <ListError retry={refetch}>{t('errors.search')}</ListError>
      ) : (
        <div className="min-h-[30rem] p-4 sm:p-8 md:px-12 md:pt-8 lg:px-24">
          <VirtuosoGrid
            useWindowScroll
            style={{ height: '100vw' }}
            context={{ loadMore }}
            endReached={loadMore}
            overscan={200}
            data={mapPagesToItems<OrganizationFlat>(data?.pages)}
            itemContent={(index, ong) => <OrganizationItem key={index} organization={ong} />}
            // itemClassName="virtuso-grid-item"
            listClassName="virtuso-grid-list"
            components={{
              Footer: () => (
                <InfiniteScrollFooter
                  hasNoData={data?.pages?.length === 0}
                  isLoading={isFetching}
                />
              ),
              Header: () => {
                return data?.pages.length !== 0 && !isFetching ? (
                  <p className="title text-center">{`${data?.pages[0]?.meta?.totalItems} ${
                    data?.pages[0]?.meta?.totalItems && data?.pages[0]?.meta?.totalItems > 1
                      ? t('many_organizations_title')
                      : t('one_organization_title')
                  }`}</p>
                ) : (
                  <></>
                );
              },
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Organizations;
