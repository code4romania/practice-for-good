import { IconTypes } from '../enums/IconTypes.enum';
import { COUNTER_TYPE } from './CounterType.constants';

export const LANDING_DOMAINS = [
  { name: 'Medical', icon: IconTypes.USERS },
  { name: 'Jurnalism', icon: IconTypes.USERS },
  { name: 'Educație', icon: IconTypes.USERS },
  { name: 'Inginerie', icon: IconTypes.USERS },
  { name: 'Tech', icon: IconTypes.USERS },
  { name: 'Advocacy', icon: IconTypes.USERS },
];

export const LANDING_COUNTER_ITEMS = [
  { value: '3500+', type: COUNTER_TYPE.PROGRAMS },
  { value: '500+', type: COUNTER_TYPE.NGOS },
];

export const ORGANIZATIONS = {
  meta: {
    itemCount: 5,
    totalItems: 5,
    itemsPerPage: 5,
    totalPages: 1,
    currentPage: 1,
  },
  items: [
    {
      id: 1,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
    {
      id: 2,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
    {
      id: 3,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
    {
      id: 4,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
    {
      id: 5,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
    {
      id: 6,
      organizationGeneral: {
        logo: '',
        name: 'Denumire Scurta ONG',
        shortDescription:
          'Short Description Short Description Short Description Short Description Short Description',
      },
    },
  ],
};
