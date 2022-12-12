import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { usePracticePrograms } from '../../store/Selectors';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import { usePracticeProgramsQuery } from '../../services/practice-programs/PracticePrograms.queries';
import NoData from '../../common/components/no-data/NoData';
import { useQueryParams } from 'use-query-params';
import { POGRAMS_QUERY_PARAMS } from '../../common/constants/Programs.constants';
import { WorkingHoursEnum } from '../../common/enums/WorkingHours.enum';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const [query] = useQueryParams(POGRAMS_QUERY_PARAMS);
  const [page, setPage] = useState<number>(1);

  const {
    practicePrograms: programs,
    meta: { totalItems: total },
  } = usePracticePrograms();

  const { isLoading, error, refetch } = usePracticeProgramsQuery(
    page,
    query.search,
    query.locationId,
    query.faculties,
    query.workingHours as WorkingHoursEnum,
    query.domains,
    query.start,
    query.end,
  );

  const loadMore = useCallback(() => {
    if (total > programs.length) setPage(page + 1);
  }, [programs, total]);

  return (
    <section className="w-full">
      <PracticeProgramsSearch>
        {error && !isLoading ? (
          <NoData retry={refetch}>{t('errors.search')}</NoData>
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
              />
            </div>
          </div>
        )}
      </PracticeProgramsSearch>
    </section>
  );
};

export default Programs;
