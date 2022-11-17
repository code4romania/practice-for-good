import { useQuery } from '@tanstack/react-query';
import { WorkingHoursEnum } from '../../common/enums/WorkingHours.enum';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import { usePracticePrograms } from '../../store/Selectors';
import useStore from '../../store/Store';
import { getPracticeProgramById, searchPracticePrograms } from './PracticePrograms.service';

export const usePracticeProgramsQuery = (
  page: number,
  search?: string | null,
  location?: number | null,
  faculties?: (number | null)[] | null,
  workingHours?: WorkingHoursEnum | null,
  domains?: (number | null)[] | null,
  start?: Date | null,
  end?: Date | null,
) => {
  const { setPracticePrograms, nextPracticePrograms } = useStore();
  const {
    meta: { itemsPerPage },
  } = usePracticePrograms();

  return useQuery(
    [
      'practice-programs',
      itemsPerPage,
      page,
      search,
      location,
      faculties,
      workingHours,
      domains,
      start,
      end,
    ],
    () =>
      searchPracticePrograms(
        itemsPerPage,
        page,
        search,
        location,
        faculties,
        workingHours,
        domains,
        start,
        end,
      ),
    {
      onSuccess: (data: PaginatedEntity<IPracticeProgram>) => {
        if (page > 1) {
          nextPracticePrograms(data);
        } else {
          setPracticePrograms(data);
        }
      },
      enabled: !!(page && itemsPerPage),
      retry: 0,
    },
  );
};

export const usePracticeProgram = (id: string) => {
  const { setSelectedProgram } = useStore();
  return useQuery(['practice-program', id], () => getPracticeProgramById(id), {
    enabled: !!id,
    retry: 0,
    onSuccess: (data: IPracticeProgram) => {
      setSelectedProgram(data);
    },
  });
};
