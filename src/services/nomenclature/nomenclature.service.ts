import API from '../API';

export const getCounties = (): Promise<any> => {
  return API.get(`/nomenclatures/counties`).then((res) => res.data);
};

export const getCities = (searchTerm: string, countyId?: number): Promise<any> => {
  let queryParams = '';
  if (searchTerm) {
    queryParams = queryParams.concat(`search=${searchTerm}&`);
  }

  return API.get(`/nomenclatures/cities?${queryParams}`).then((res) => res.data);
};

export const getDomains = (): Promise<any> => {
  return API.get(`/nomenclatures/domains`).then((res) => res.data);
};

