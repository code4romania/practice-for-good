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
  },
  selectedProgram: null,
  setSelectedProgram: (selectedProgram: IPracticeProgram) => set({ selectedProgram }),
  setPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) =>
    set({
      practicePrograms,
    }),
  nextPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) => {
    set((state: { practicePrograms: PaginatedEntity<IPracticeProgram> }) => ({
      practicePrograms: {
        ...state.practicePrograms,
        meta: practicePrograms.meta,
        items: [...state.practicePrograms.items, ...practicePrograms.items],
      },
    }));
  },
});

export default { practiceProgramsSlice };
