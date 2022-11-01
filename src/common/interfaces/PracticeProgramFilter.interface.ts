import { ISelectData } from '../helpers/Nomenclature.helper';

export interface PracticeProgramFilter {
  search?: string;
  locationId?: number;
  faculties?: number[];
  workingHours?: ISelectData;
  domains?: number[];
  start?: string;
  end?: string;
}
