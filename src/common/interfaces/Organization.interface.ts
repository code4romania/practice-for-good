import { City } from './City.interface';
import { County } from './County.interface';
import { Domain } from './Domain.interface';

export interface Organization {
  id: number;
  logo: string;
  name: string;
  shortDescription: string;
  description: string | null;
  email: string;
  phone: string;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;
  tiktok: string | null;
  city: City;
  county: County;
  domains: Domain[];
}
