import { useQuery } from '@tanstack/react-query';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import { usePracticePrograms } from '../../store/Selectors';
import useStore from '../../store/Store';
import { searchPracticePrograms } from './PracticePrograms.service';

export const usePracticeProgramsQuery = () => {
  const { setPracticePrograms } = useStore();
  const {
    filters: { search, locationId, faculties, workingHours, domains, start, end },
    meta: { currentPage, itemsPerPage },
  } = usePracticePrograms();

  return useQuery(
    [
      'practice-programs',
      itemsPerPage,
      currentPage,
      search,
      locationId,
      faculties,
      workingHours,
      domains,
      start,
      end,
    ],
    () =>
      searchPracticePrograms(
        itemsPerPage,
        currentPage,
        search,
        locationId,
        faculties,
        workingHours,
        domains,
        start,
        end,
      ),
    {
      onSuccess: (data: PaginatedEntity<IPracticeProgram>) => {
        setPracticePrograms(data);
      },
      enabled: !!(currentPage && itemsPerPage),
    },
  );
};
