import { City } from './City.interface';
import { Domain } from './Domain.interface';
import { Faculty } from './Faculty.interface';
import { Skill } from './Skill.interface';

export interface PracticeProgram {
  id: number;
  title: string;
  deadline: Date;
  description: string;
  startDate: Date;
  endDate: Date;
  minWorkingHours: number;
  maxWorkingHours: number;
  link: string;
  location: City;
  domains: Domain[];
  faculties: Faculty[];
  skills: Skill[];
  organization: {
    id: number;
    organizationGeneral: {
      name: string;
    };
  };
}
