import { format } from 'date-fns';

export const formatDateYear = (value: Date | string): string =>
  format(new Date(value), 'dd MMM yyyy');

export const formatDate = (value: Date | string): string => format(new Date(value), 'dd MMM');

export const openInNewTab = (url: string): void => {
  // Temporary - TO REMOVE after fixing http addon on input
  if (!url.includes('http')) {
    url = `https://${url}`;
  }
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};