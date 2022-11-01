import create from 'zustand';
import { City } from '../common/interfaces/City.interface';
import { Domain } from '../common/interfaces/Domain.interface';
import { Faculty } from '../common/interfaces/Faculty.interface';
import { PaginatedEntity } from '../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../common/interfaces/PracticeProgram.interface';
import { PracticeProgramFilter } from '../common/interfaces/PracticeProgramFilter.interface';
import { nomenclatureSlice } from './nomenclatures/Nomenclatures.slice';
import { practiceProgramsSlice } from './practice-programs/PracticePrograms.slice';

interface PracticeProgramsState {
  practicePrograms: PaginatedEntity<IPracticeProgram> & { filters: PracticeProgramFilter };
  setPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) => void;
  nextPage: () => void;
  updateFilters: (
    search: string,
    locationId: number,
    selectedFaculties: number[],
    workingHours: any,
    selectedDomains: number[],
    start: Date,
    end: Date,
  ) => void;
}

interface NomenclatureState {
  cities: City[];
  domains: Domain[];
  faculties: Faculty[];
  setCities: (cities: City[]) => void;
  setDomains: (domains: Domain[]) => void;
  setFaculties: (faculties: Faculty[]) => void;
}

const useStore = create<PracticeProgramsState & NomenclatureState>()((set: any) => ({
  ...practiceProgramsSlice(set),
  ...nomenclatureSlice(set),
}));

export default useStore;
