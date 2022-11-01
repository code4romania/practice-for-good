import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { usePracticePrograms } from '../../store/Selectors';
import { Virtuoso } from 'react-virtuoso';
import ProgramItem from './components/ProgramItem';
import useStore from '../../store/Store';
import { usePracticeProgramsQuery } from '../../services/practice-programs/PracticePrograms.queries';

const Programs = () => {
  const { t } = useTranslation(['practice_programs', 'common']);
  const { nextPage } = useStore();

  const {
    practicePrograms: programs,
    meta: { totalItems: total },
  } = usePracticePrograms();

  const { isLoading } = usePracticeProgramsQuery();

  const loadMore = useCallback(() => {
    if (total > programs.length) nextPage();
  }, [programs, total]);

  return (
    <section className="w-full">
      <PracticeProgramsSearch showFilters preloadData>
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
                Footer: () =>
                  isLoading ? (
                    <div className="w-full flex items-center justify-center pt-8">
                      {t('loading', { ns: 'common' })}
                    </div>
                  ) : (
                    <></>
                  ),
              }}
            />
          </div>
        </div>
      </PracticeProgramsSearch>
    </section>
  );
};

export default Programs;
