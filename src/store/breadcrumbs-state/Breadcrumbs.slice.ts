// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const breadcrumbsSlice = (set: any) => ({
  organizationName: null,
  programName: null,
  setOrganizationName: (organizationName: string) => {
    set({ organizationName });
  },
  setProgramName: (programName: string) => {
    set({ programName });
  },
});

export default { breadcrumbsSlice };
