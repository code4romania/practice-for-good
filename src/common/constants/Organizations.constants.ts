import { DelimitedNumericArrayParam, StringParam } from 'use-query-params';

export const ORGANIZATIONS_QUERY_PARAMS = {
  search: StringParam,
  location: StringParam,
  domains: DelimitedNumericArrayParam,
};
