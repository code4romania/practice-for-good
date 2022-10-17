export interface ISelectData {
  value: any;
  label: string;
}

export const mapCitiesToSelect = (item: any): ISelectData => ({
  value: item?.id,
  label: `${item?.name}`,
});