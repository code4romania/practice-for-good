import { WorkingHoursEnum } from '../enums/WorkingHours.enum';

export interface PracticeProgramsQuery {
  search?: string;
  group?: string;
  end?: string;
  start?: string;
  faculties?: number[];
  workingHours?: WorkingHoursEnum;
  domains?: number[];
  locationId?: number;
}
