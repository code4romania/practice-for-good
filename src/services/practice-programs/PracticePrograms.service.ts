import { ISelectData } from '../../common/helpers/Nomenclature.helper';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import API from '../API';

export const searchPracticePrograms = async (
  limit: number,
  page: number,
  search?: string,
  locationId?: ISelectData,
  faculties?: ISelectData[],
  workingHours?: ISelectData,
  domains?: ISelectData[],
  start?: string,
  end?: string,
): Promise<PaginatedEntity<IPracticeProgram>> => {
  return API.get('/practice-program/search', {
    params: {
      limit,
      page,
      search: search || undefined,
      locationId: locationId?.value,
      faculties: faculties?.map((faculty) => faculty.value),
      domains: domains?.map((domain) => domain.value),
      workingHours: workingHours?.value,
      start,
      end,
    },
  }).then((res) => res.data);
};

export const getPracticeProgramById = async (id: string): Promise<IPracticeProgram> => {
  return API.get(`/practice-program/${id}/public`).then((res) => res.data);
};
