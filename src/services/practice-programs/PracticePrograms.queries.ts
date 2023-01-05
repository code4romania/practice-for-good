import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import { PracticeProgramsQuery } from '../../common/interfaces/PracticeProgramQuery.interface';
import useStore from '../../store/Store';
import { getPracticeProgramById, getPracticePrograms } from './PracticePrograms.service';

export const usePracticeProgram = (id: string) => {
  const { setProgramName, setOrganizationName } = useStore();
  return useQuery(['practice-program', id], () => getPracticeProgramById(id), {
    onSuccess: (program: IPracticeProgram) => {
      setProgramName(program?.title);
      setOrganizationName(program?.organizationName as string);
    },
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
