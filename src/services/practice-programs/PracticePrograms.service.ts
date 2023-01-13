import { formatISO9075 } from 'date-fns';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';
import { PracticeProgramsQuery } from '../../common/interfaces/PracticeProgramQuery.interface';
import API from '../API';

export const getPracticePrograms = async ({
  pageParam = 1,
  ...query
}: {
  pageParam?: number;
} & Partial<PracticeProgramsQuery>): Promise<PaginatedEntity<IPracticeProgram>> => {
  return API.get('/api/practice-program/search', {
    params: {
      limit: 25,
      page: pageParam,
      ...query,
      end: query?.end ? formatISO9075(new Date(query?.end)) : undefined,
      start: query?.start ? formatISO9075(new Date(query?.start)) : undefined,
    },
  }).then((res) => res.data);
};

export const getPracticeProgramById = async (id: string): Promise<IPracticeProgram> => {
  return API.get(`/api/practice-program/${id}`).then((res) => res.data);
};
