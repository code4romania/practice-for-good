import i18n from '../../../configs/i18n';
import { WorkingHours } from '../../../enums/WorkingHours.enum';
import IconAddon from '../../icon-addon/IconAddon';
import {
  AcademicCapIcon,
  ClockIcon,
  LocationMarkerIcon,
  SearchIcon,
  ViewBoardsIcon,
} from '@heroicons/react/solid';

export const PracticeProgramsSearchConfig: Record<string, any> = {
  search: {
    key: 'search',
    rules: {},
    config: {
      type: 'text',
      label: '',
      helperText: '',
      placeholder: i18n.t('common:search.config.search.placeholder'),
      addOn: () => IconAddon({ icon: SearchIcon }),
    },
  },
  locationId: {
    key: 'locationId',
    label: '',
    rules: {},
    placeholder: i18n.t('common:search.config.location.placeholder'),
    addOn: () => IconAddon({ icon: LocationMarkerIcon }),
  },
  faculties: {
    key: 'faculties',
    rules: {},
    placeholder: i18n.t('practice_programs_search:config.faculties.placeholder'),
    icon: AcademicCapIcon,
  },
  start: {
    key: 'start',
    rules: {},
    placeholder: i18n.t('practice_programs_search:config.start.placeholder'),
  },
  end: {
    key: 'end',
    rules: {},
    placeholder: i18n.t('practice_programs_search:config.end.placeholder'),
  },
  workingHours: {
    key: 'workingHours',
    rules: {},
    config: {
      collection: [...WorkingHours],
      placeholder: i18n.t('practice_programs_search:config.working_hours.placeholder'),
    },
    icon: ClockIcon,
  },
  domains: {
    key: 'domains',
    rules: {},
    config: {
      placeholder: i18n.t('practice_programs_search:config.domain.placeholder'),
    },
    icon: ViewBoardsIcon,
  },
};
