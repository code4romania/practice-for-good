import { OrderDirection } from '../../common/enums/OrderDirection.enum';
import { OrganizationFlat } from '../../common/interfaces/OrganizationFlat.interface';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';

export const organizationsSlice = (set: any) => ({
  organizations: {
    items: [],
    meta: {
      currentPage: 1,
      itemCount: 0,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 1,
      orderByColumn: 'id',
      orderDirection: OrderDirection.ASC,
    },
    filters: {
      search: '',
      locationId: undefined,
      domains: [],
    },
  },
  setOrganizations: (organizations: PaginatedEntity<OrganizationFlat>) => {
    set(
      (state: {
        organizations: PaginatedEntity<OrganizationFlat> & {
          search: string;
          locationId?: number;
          domains: number[];
        };
      }) => ({
        organizations: {
          ...state.organizations,
          meta: organizations.meta,
          items: [...state.organizations.items, ...organizations.items],
        },
      }),
    );
  },
  nextPageOrganizations: () => {
    set((state: { organizations: PaginatedEntity<OrganizationFlat> }) => ({
      organizations: {
        ...state.organizations,
        meta: {
          ...state.organizations.meta,
          currentPage: state.organizations.meta.currentPage + 1,
        },
      },
    }));
  },
  updateOrganizationFilters: (search: string, locationId: number, domains: number[]) => {
    set((state: { organizations: PaginatedEntity<OrganizationFlat> }) => ({
      organizations: {
        items: [],
        meta: {
          ...state.organizations.meta,
          currentPage: 1,
        },
        filters: {
          search,
          locationId,
          domains,
        },
      },
    }));
  },
});

export default { organizationsSlice };
