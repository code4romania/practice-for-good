import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { PracticeProgramsQuery } from '../../common/interfaces/PracticeProgramQuery.interface';
import { getPracticeProgramById, getPracticePrograms } from './PracticePrograms.service';

export const usePracticeProgram = (id: string) => {
  return useQuery(['practice-program', id], () => getPracticeProgramById(id), {
    enabled: !!id,
    retry: 0,
  });
};

export const userPracticeProgramsInfiniteQuery = (query?: PracticeProgramsQuery) => {
  return useInfiniteQuery(
    ['practice-programs', query],
    ({ pageParam }) => {
      return getPracticePrograms({ pageParam, ...query });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.meta.totalPages > lastPage?.meta.currentPage
          ? lastPage?.meta.currentPage + 1
          : undefined;
      },
    },
  );
};
