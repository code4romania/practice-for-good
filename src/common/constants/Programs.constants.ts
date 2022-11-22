import { DateParam, DelimitedNumericArrayParam, NumberParam, StringParam } from 'use-query-params';

export const POGRAMS_QUERY_PARAMS = {
  search: StringParam,
  workingHours: StringParam,
  locationId: NumberParam,
  start: DateParam,
  end: DateParam,
  faculties: DelimitedNumericArrayParam,
  domains: DelimitedNumericArrayParam,
};