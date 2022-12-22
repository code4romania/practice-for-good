import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getOrganizations, getOrganizationWithPracticePrograms } from './Organization.service';

export const useOrganizationsInfiniteQuery = (query?: any) => {
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
  return useQuery(
    ['organization', organizationId],
    () => getOrganizationWithPracticePrograms(organizationId),
    {
      enabled: !!organizationId,
      retry: 0,
    },
  );
};
