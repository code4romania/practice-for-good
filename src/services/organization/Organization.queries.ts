import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Organization } from '../../common/interfaces/Organization.interface';
import { OrganizationQuery } from '../../common/interfaces/OrganizationQuery.interface';
import useStore from '../../store/Store';
import { getOrganizations, getOrganizationWithPracticePrograms } from './Organization.service';

export const useOrganizationsInfiniteQuery = (query?: OrganizationQuery) => {
  return useInfiniteQuery(
    ['organizations', query],
    ({ pageParam }) => {
      return getOrganizations({ pageParam, ...query });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.meta.totalPages > lastPage?.meta.currentPage
          ? lastPage?.meta.currentPage + 1
          : undefined;
      },
    },
  );
};

export const useOrganization = (organizationId: string) => {
  const { setOrganizationName } = useStore();
  return useQuery(
    ['organization', organizationId],
    () => getOrganizationWithPracticePrograms(organizationId),
    {
      onSuccess: (organization: Organization) => {
        setOrganizationName(organization.name);
      },
      enabled: !!organizationId,
      retry: 0,
    },
  );
};
