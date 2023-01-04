import useStore from '../Store';

export const useBreadcrumbsState = () => {
  const organizationName = useStore((state) => state.organizationName);
  const programName = useStore((state) => state.programName);
  return { organizationName, programName };
};
