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
import { PROGRAMS_QUERY_PARAMS } from '../../common/constants/Programs.constants';
import { PracticeProgramsQuery } from '../../common/interfaces/PracticeProgramQuery.interface';
import ListError from '../../common/components/list-error/ListError';
import { mapPagesToItems } from '../../common/helpers/Format.helper';
import VirtuosoHeader from '../../common/components/virtuoso-header/VirtuosoHeader';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const [query] = useQueryParams(PROGRAMS_QUERY_PARAMS);

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
        <div className="min-h-[30rem] px-[5%] lg:px-[10%] pb-5">
          {error && !isFetching ? (
            <ListError retry={refetch}>{t('errors.search')}</ListError>
          ) : (
            <Virtuoso
              useWindowScroll
              context={{ loadMore }}
              endReached={loadMore}
              overscan={200}
              data={mapPagesToItems<IPracticeProgram>(data?.pages)}
              itemContent={(index, program) => <ProgramItem key={index} program={program} />}
              components={{
                Footer: () => (
                  <InfiniteScrollFooter
                    hasNoData={data?.pages?.length === 0}
                    isLoading={isFetching}
                  />
                ),
                Header: () => {
                  return data?.pages[0].meta && !isFetching ? (
                    <VirtuosoHeader
                      totalItems={data.pages[0].meta.totalItems}
                      entities={
                        data.pages[0].meta.totalItems > 1
                          ? t('many_programs_title')
                          : t('one_program_title')
                      }
                    />
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
