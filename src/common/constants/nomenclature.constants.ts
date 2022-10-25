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

export const PRACTICE_PROGRAMS = {
  total: 1220,
  items: [
    {
      id: 1,
      image: '',
      organization: { name: 'Organizatia ONG', id: 1 },
      title: 'Titlu scurt de program de practica',
      location: 'Bucuresti',
      startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
      endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
      duration: 'min 30 ore',
    },
    {
      id: 2,
      image: '',
      organization: { name: 'Organizatia ONG', id: 1 },
      title: 'Titlu scurt de program de practica',
      location: 'Bucuresti',
      startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
      endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
      duration: 'min 30 ore',
    },
    {
      id: 3,
      image: '',
      organization: { name: 'Organizatia ONG', id: 1 },
      title: 'Titlu scurt de program de practica',
      location: 'Bucuresti',
      startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
      endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
      duration: 'min 30 ore',
      deadline: 'Fri, 21 Oct 2022 07:53:32 GMT',
    },
    {
      id: 4,
      image: '',
      organization: { name: 'Organizatia ONG', id: 1 },
      title: 'Titlu scurt de program de practica',
      location: 'Bucuresti',
      startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
      endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
      duration: 'min 30 ore',
      deadline: 'Fri, 21 Oct 2022 07:53:32 GMT',
    },
    {
      id: 5,
      image: '',
      organization: { name: 'Organizatia ONG', id: 1 },
      title: 'Titlu scurt de program de practica',
      location: 'Bucuresti',
      startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
      endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
      duration: 'min 30 ore',
      deadline: 'Fri, 21 Oct 2022 07:53:32 GMT',
    },
  ],
};
