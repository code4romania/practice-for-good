import { useQuery } from '@tanstack/react-query';
import { getLandingCounters } from './Statistics.services';

export const useGetLandingCountersQuery = (pullingType: string) => {
  return useQuery(['landing-counters', pullingType], () => getLandingCounters(pullingType));
};
