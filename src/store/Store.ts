import create from 'zustand';
import { City } from '../common/interfaces/City.interface';
import { Domain } from '../common/interfaces/Domain.interface';
import { Faculty } from '../common/interfaces/Faculty.interface';
import { PaginatedEntity } from '../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../common/interfaces/PracticeProgram.interface';
import { nomenclatureSlice } from './nomenclatures/Nomenclatures.slice';
import { practiceProgramsSlice } from './practice-programs/PracticePrograms.slice';

interface PracticeProgramsState {
  practicePrograms: PaginatedEntity<IPracticeProgram>;
  setPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) => void;
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
