import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { usePracticePrograms } from '../../store/Selectors';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import useStore from '../../store/Store';
import { usePracticeProgramsQuery } from '../../services/practice-programs/PracticePrograms.queries';
import Loading from '../../common/components/loading/Loading';
import NoData from '../../common/components/no-data/NoData';

const Programs = () => {
  const { t } = useTranslation('practice_programs');
  const { nextPage } = useStore();

  const {
    practicePrograms: programs,
    meta: { totalItems: total },
  } = usePracticePrograms();

  const { isLoading, error } = usePracticeProgramsQuery();

  const loadMore = useCallback(() => {
    if (total > programs.length) nextPage();
  }, [programs, total]);

  return (
    <section className="w-full">
      <PracticeProgramsSearch showFilters preloadData>
        {error && !isLoading ? (
          <NoData>{t('errors.search')}</NoData>
        ) : (
          <div className="flex flex-col w-full lg:px-60 px-10 pt-10">
            <p className="title text-center">{`${total} ${
              total > 1 ? t('many_programs_title') : t('one_program_title')
            }`}</p>
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
                  Footer: () => (isLoading ? <Loading /> : <></>),
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
