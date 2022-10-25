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
