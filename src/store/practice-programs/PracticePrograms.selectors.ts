import useStore from '../Store';

export const usePracticePrograms = () => {
  const practicePrograms = useStore((state) => state.practicePrograms.items);
  const filters = useStore((state) => state.practicePrograms.filters);
  const meta = useStore((state) => state.practicePrograms.meta);
  return { practicePrograms, filters, meta };
};
