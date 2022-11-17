import { DateParam, DelimitedNumericArrayParam, StringParam } from 'use-query-params';

export const POGRAMS_QUERY_PARAMS = {
  search: StringParam,
  workingHours: StringParam,
  location: StringParam,
  start: DateParam,
  end: DateParam,
  faculties: DelimitedNumericArrayParam,
  domains: DelimitedNumericArrayParam,
};
