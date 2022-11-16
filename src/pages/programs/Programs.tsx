import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { usePracticePrograms } from '../../store/Selectors';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import useStore from '../../store/Store';
import { usePracticeProgramsQuery } from '../../services/practice-programs/PracticePrograms.queries';
import NoData from '../../common/components/no-data/NoData';
import InfiniteScrollFooter from '../../common/components/infinite-scroll-footer/InfiniteScrollFooter';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const { nextPagePracticePrograms } = useStore();

  const {
    practicePrograms: programs,
    meta: { totalItems: total },
  } = usePracticePrograms();

  const { isLoading, error, refetch } = usePracticeProgramsQuery();

  const loadMore = useCallback(() => {
    if (total > programs.length) nextPagePracticePrograms();
  }, [programs, total]);

  return (
    <section className="w-full">
      <PracticeProgramsSearch showFilters preloadData>
        {error && !isLoading ? (
          <NoData retry={refetch}>{t('errors.search')}</NoData>
        ) : (
          <div className="flex flex-col w-full lg:px-60 px-10 pt-10">
            {programs.length !== 0 && !isLoading && (
              <p className="title text-center">{`${total} ${total > 1 ? t('many_programs_title') : t('one_program_title')
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
