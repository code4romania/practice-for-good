import useStore from '../Store';

export const usePracticePrograms = () => {
  const practicePrograms = useStore((state) => state.practicePrograms.items);
  // const filters = useStore((state) => state.practicePrograms.filters);
  const meta = useStore((state) => state.practicePrograms.meta);
  return { practicePrograms, meta };
};

export const useSelectedPracticeProgram = () => {
  const selectedProgram = useStore((state) => state.selectedProgram);
  return { selectedProgram };
};
