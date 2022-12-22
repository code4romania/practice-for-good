import React from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import { userPracticeProgramsInfiniteQuery } from '../../services/practice-programs/PracticePrograms.queries';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import { useQueryParams } from 'use-query-params';
import { POGRAMS_QUERY_PARAMS } from '../../common/constants/Programs.constants';
import { PracticeProgramsQuery } from '../../common/interfaces/PracticeProgramQuery.interface';
import ListError from '../../common/components/list-error/ListError';
import { mapPagesToItems } from '../../common/helpers/Format.helper';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const [query] = useQueryParams(POGRAMS_QUERY_PARAMS);

  const { data, isFetching, fetchNextPage, hasNextPage, error, refetch } =
    userPracticeProgramsInfiniteQuery(query as PracticeProgramsQuery);

  const loadMore = () => {
    if (!isFetching && hasNextPage) fetchNextPage();
  };

  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch />
      </div>
      <ShapeWrapper>
        <div className="min-h-[30rem] p-4 sm:p-8 md:px-12 md:pt-8 lg:px-24 xl:">
          {error && !isFetching ? (
            <ListError retry={refetch}>{t('errors.search')}</ListError>
          ) : (
            <Virtuoso
              useWindowScroll
              context={{ loadMore }}
              endReached={loadMore}
              overscan={200}
              data={mapPagesToItems<IPracticeProgram>(data?.pages)}
              itemContent={(index, program) => (
                <div className="py-5">
                  <ProgramItem key={index} program={program} />
                </div>
              )}
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
                        ? t('many_programs_title')
                        : t('one_program_title')
                    }`}</p>
                  ) : (
                    <></>
                  );
                },
              }}
            />
          )}
        </div>
      </ShapeWrapper>
    </section>
  );
};

export default Programs;
