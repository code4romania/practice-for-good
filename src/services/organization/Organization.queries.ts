import { useQuery } from '@tanstack/react-query';
import { Organization } from '../../common/interfaces/Organization.interface';
import { OrganizationFlat } from '../../common/interfaces/OrganizationFlat.interface';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import { useOrganizations } from '../../store/Selectors';
import useStore from '../../store/Store';
import { getOrganizationWithPracticePrograms, searchOrganizations } from './Organization.service';

export const useOrganizationQuery = (
  currentPage: number,
  search?: string | null,
  locationId?: number | null,
  domains?: (number | null)[] | null,
) => {
  const { setOrganizations, nextOrganizations } = useStore();
  const {
    meta: { itemsPerPage },
  } = useOrganizations();

  return useQuery(
    ['organizations', itemsPerPage, currentPage, search, locationId, domains],
    () => searchOrganizations(itemsPerPage, currentPage, search, locationId, domains),
    {
      onSuccess: (data: PaginatedEntity<OrganizationFlat>) => {
        if (currentPage > 1) {
          nextOrganizations(data);
        } else {
          setOrganizations(data);
        }
      },
      enabled: !!(currentPage && itemsPerPage),
      retry: 0,
    },
  );
};

export const useOrganization = (organizationId: string) => {
  const { setSelectedOrganization } = useStore();

  return useQuery(
    ['organization', organizationId],
    () => getOrganizationWithPracticePrograms(organizationId),
    {
      onSuccess: (data: Organization) => {
        setSelectedOrganization(data);
      },
      enabled: !!organizationId,
      retry: 0,
    },
  );
};
