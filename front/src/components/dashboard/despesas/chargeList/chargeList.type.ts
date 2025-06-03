import { ChargeListModel } from "./chargeList.model";

export type IChargeListItemProps = {
  id: number;
  name: string;
  description: string;
  amount: string;
  statusPaiment: string;
  createdAt: string;
  expiredAt: string;
};

export type IChargeListViewProps = ReturnType<typeof ChargeListModel>;
