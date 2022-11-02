import { ISelectData } from '../../common/helpers/Nomenclature.helper';
import { PaginatedEntity } from '../../common/interfaces/PaginatedEntity.interface';
import API from '../API';

export const searchOrganizations = async (
  limit: number,
  page: number,
  search?: string,
  locationId?: ISelectData,
  domains?: ISelectData[],
): Promise<PaginatedEntity<any>> => {
  let requestUrl = `organization/practice-program?limit=${limit}&page=${page}`;

  if (search) requestUrl = `${requestUrl}&search=${search}`;

  if (locationId) requestUrl = `${requestUrl}&locationId=${locationId.value}`;

  if (domains) requestUrl = `${requestUrl}&${domains.map((f) => `domains[]=${f.value}`).join('&')}`;

  return API.get(requestUrl).then((res) => res.data);
};
