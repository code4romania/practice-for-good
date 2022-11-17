import { Organization } from '../../common/interfaces/Organization.interface';
import { OrganizationFlat } from '../../common/interfaces/OrganizationFlat.interface';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import API from '../API';

export const searchOrganizations = async (
  limit: number,
  page: number,
  search?: string | null,
  location?: string | null,
  domains?: (number | null)[] | null,
): Promise<PaginatedEntity<OrganizationFlat>> => {
  return API.get('/api/practice-program/organization', {
    params: {
      limit,
      page,
      search: search || undefined,
      location,
      domains,
    },
  }).then((res) => res.data);
};

export const getOrganizationWithPracticePrograms = async (
  organizationId: string,
): Promise<Organization> => {
  return API.get(`/api/practice-program/organization/${organizationId}`).then((res) => res.data);
};
