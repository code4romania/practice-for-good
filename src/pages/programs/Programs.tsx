import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { usePracticePrograms } from '../../store/Selectors';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import { usePracticeProgramsQuery } from '../../services/practice-programs/PracticePrograms.queries';
import ListError from '../../common/components/list-error/ListError';
import { useQueryParams } from 'use-query-params';
import { POGRAMS_QUERY_PARAMS } from '../../common/constants/Programs.constants';
import { WorkingHoursEnum } from '../../common/enums/WorkingHours.enum';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const [query, setQuery] = useQueryParams(POGRAMS_QUERY_PARAMS);

  const {
    practicePrograms: programs,
    meta: { totalItems: total },
  } = usePracticePrograms();

  const { isLoading, error, refetch } = usePracticeProgramsQuery(
    query.page as number,
    query.search,
    query.locationId,
    query.faculties,
    query.workingHours as WorkingHoursEnum,
    query.domains,
    query.start,
    query.end,
  );

  useEffect(() => {
    setQuery({ ...query, page: 1 });
  }, []);

  const loadMore = useCallback(() => {
    if (total > programs.length) setQuery({ ...query, page: query?.page ? query?.page + 1 : 1 });
  }, [programs, total]);

  return (
    <section className="w-full">
      <PracticeProgramsSearch>
        {error && !isLoading ? (
          <ListError retry={refetch}>{t('errors.search')}</ListError>
        ) : (
          <div className="flex flex-col w-full lg:px-60 px-10 pt-10">
            {programs.length !== 0 && !isLoading && (
              <p className="title text-center">{`${total} ${
                total > 1 ? t('many_programs_title') : t('one_program_title')
              }`}</p>
            )}
            <div className="mb-[10rem]">
              <Virtuoso
                useWindowScroll
                style={{ height: '100vw' }}
                context={{ loadMore }}
                endReached={loadMore}
                overscan={200}
                data={programs}
                itemContent={(index, program) => <ProgramItem key={index} program={program} />}
                components={{
                  Footer: () => (
                    <InfiniteScrollFooter
                      hasNoData={programs?.length === 0}
                      isLoading={isLoading}
                    />
                  ),
                }}
              />
            </div>
          </div>
        )}
      </PracticeProgramsSearch>
    </section>
  );
};

export default Programs;
