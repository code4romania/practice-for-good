import { useQuery } from '@tanstack/react-query';
import { City } from '../../common/interfaces/City.interface';
import { Domain } from '../../common/interfaces/Domain.interface';
import { Faculty } from '../../common/interfaces/Faculty.interface';
import useStore from '../../store/Store';
import { getCities, getDomains, getFaculties } from './Nomenclature.service';

export const useCitiesQuery = (search: string) => {
  const { setCities } = useStore();
  return useQuery(['cities', search], () => getCities({ search }), {
    onSuccess: (data: City[]) => {
      setCities(data);
    },
    enabled: !!search,
  });
};

export const useDomainsQuery = () => {
  const { setDomains } = useStore();
  return useQuery(['domains'], () => getDomains(), {
    onSuccess: (data: Domain[]) => {
      setDomains(data);
    },
  });
};

export const useFacultiesQuery = () => {
  const { setFaculties } = useStore();
  return useQuery(['faculties'], () => getFaculties(), {
    onSuccess: (data: Faculty[]) => {
      setFaculties(data);
    },
  });
};
