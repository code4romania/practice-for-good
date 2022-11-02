/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderDirection } from '../../common/enums/OrderDirection.enum';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../../common/interfaces/PracticeProgram.interface';

export const practiceProgramsSlice = (set: any) => ({
  practicePrograms: {
    items: [],
    meta: {
      currentPage: 1,
      itemCount: 0,
      itemsPerPage: 5,
      totalItems: 0,
      totalPages: 1,
      orderByColumn: 'id',
      orderDirection: OrderDirection.ASC,
    },
    filters: {
      search: '',
      locationId: undefined,
      faculties: [],
      workingHours: undefined,
      domains: [],
      start: undefined,
      end: undefined,
    },
  },
  setPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) => {
    set((state: { practicePrograms: PaginatedEntity<IPracticeProgram> }) => ({
      practicePrograms: {
        ...state.practicePrograms,
        meta: practicePrograms.meta,
        items: [...state.practicePrograms.items, ...practicePrograms.items],
      },
    }));
  },
  nextPagePracticePrograms: () => {
    set((state: { practicePrograms: PaginatedEntity<IPracticeProgram> }) => ({
      practicePrograms: {
        ...state.practicePrograms,
        meta: {
          ...state.practicePrograms.meta,
          currentPage: state.practicePrograms.meta.currentPage + 1,
        },
      },
    }));
  },
  updatePracticeProgramsFilters: (
    search: string,
    locationId: number,
    faculties: number[],
    workingHours: any,
    domains: number[],
    start: Date,
    end: Date,
  ) => {
    set((state: { practicePrograms: PaginatedEntity<IPracticeProgram> }) => ({
      practicePrograms: {
        items: [],
        meta: {
          ...state.practicePrograms.meta,
          currentPage: 1,
        },
        filters: {
          search,
          locationId,
          faculties,
          domains,
          workingHours,
          start,
          end,
        },
      },
    }));
  },
});

export default { practiceProgramsSlice };
