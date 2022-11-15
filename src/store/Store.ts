import create from 'zustand';
import { ISelectData } from '../common/helpers/Nomenclature.helper';
import { City } from '../common/interfaces/City.interface';
import { Domain } from '../common/interfaces/Domain.interface';
import { Faculty } from '../common/interfaces/Faculty.interface';
import { Organization } from '../common/interfaces/Organization.interface';
import { OrganizationFilter } from '../common/interfaces/OrganizationFilter.interface';
import { OrganizationFlat } from '../common/interfaces/OrganizationFlat.interface';
import { PaginatedEntity } from '../common/interfaces/PaginatedEntity.interface';
import { IPracticeProgram } from '../common/interfaces/PracticeProgram.interface';
import { PracticeProgramFilter } from '../common/interfaces/PracticeProgramFilter.interface';
import { nomenclatureSlice } from './nomenclatures/Nomenclatures.slice';
import { organizationsSlice } from './organizations/Organizations.slice';
import { practiceProgramsSlice } from './practice-programs/PracticePrograms.slice';

interface PracticeProgramsState {
  practicePrograms: PaginatedEntity<IPracticeProgram> & { filters: PracticeProgramFilter };
  selectedProgram: IPracticeProgram | null;
  setSelectedProgram: (selectedProgram: IPracticeProgram) => void;
  setPracticePrograms: (practicePrograms: PaginatedEntity<IPracticeProgram>) => void;
  nextPagePracticePrograms: () => void;
  updatePracticeProgramsFilters: (
    search: string,
    locationId: ISelectData,
    selectedFaculties: ISelectData[],
    workingHours: any,
    selectedDomains: ISelectData[],
    start: Date,
    end: Date,
  ) => void;
}

interface OrganizationsState {
  organizations: PaginatedEntity<OrganizationFlat> & { filters: OrganizationFilter };
  selectedOrganization: Organization | null;
  setSelectedOrganization: (selectedOrganization: Organization) => void;
  setOrganizations: (organizations: PaginatedEntity<OrganizationFlat>) => void;
  nextPageOrganizations: () => void;
  updateOrganizationFilters: (
    search: string,
    locationId: ISelectData,
    selectedDomains: ISelectData[],
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

const useStore = create<PracticeProgramsState & NomenclatureState & OrganizationsState>()(
  (set: any) => ({
    ...practiceProgramsSlice(set),
    ...nomenclatureSlice(set),
    ...organizationsSlice(set),
  }),
);

export default useStore;
