import { format } from 'date-fns';

export const formatDateYear = (value: Date | string): string =>
  format(new Date(value), 'dd MMM yyyy');

export const formatDate = (value: Date | string): string => format(new Date(value), 'dd MMM');
