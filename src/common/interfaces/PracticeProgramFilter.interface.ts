import { ISelectData } from '../helpers/Nomenclature.helper';

export interface PracticeProgramFilter {
  search?: string;
  locationId?: ISelectData;
  faculties?: ISelectData[];
  workingHours?: ISelectData;
  domains?: ISelectData[];
  start?: string;
  end?: string;
}
