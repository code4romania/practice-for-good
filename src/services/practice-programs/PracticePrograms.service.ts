import { WorkingHoursEnum } from '../../common/enums/WorkingHours.enum';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import API from '../API';

export const searchPracticePrograms = async (
  limit: number,
  page: number,
  search?: string | null,
  location?: string | null,
  faculties?: (number | null)[] | null,
  workingHours?: WorkingHoursEnum | null,
  domains?: (number | null)[] | null,
  start?: Date | null,
  end?: Date | null,
): Promise<PaginatedEntity<IPracticeProgram>> => {
  return API.get('/api/practice-program/search', {
    params: {
      limit,
      page,
      search,
      location,
      faculties,
      domains,
      workingHours,
      start,
      end,
    },
  }).then((res) => res.data);
};

export const getPracticeProgramById = async (id: string): Promise<IPracticeProgram> => {
  return API.get(`/api/practice-program/${id}`).then((res) => res.data);
};
