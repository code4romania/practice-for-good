import { format } from 'date-fns';

export const formatDateYear = (value: Date | string | null): string =>
  value ? format(new Date(value), 'dd MMM yyyy') : '';

export const formatDateMonthYear = (value: Date | string): string =>
  format(new Date(value), 'MMM y');

export const formatDate = (value: Date | string | null): string =>
  value ? format(new Date(value), 'dd MMM') : '';

export const openInNewTab = (url: string): void => {
  // Temporary - TO REMOVE after fixing http addon on input
  if (!url.includes('http')) {
    url = `https://${url}`;
  }
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_REGEX = /^(?!.*[ ]{2})[a-zA-Z-\săîâșțĂÎÂȘȚ]*$/;

export const handleEnterKey = (inputId: string, buttonId: string): void => {
  const input = document.getElementById(inputId);
  input?.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById(buttonId)?.click();
    }
  });
};
