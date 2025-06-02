import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ChargeInfoModel } from "./chargeInfo.model";

export type ICardInfoProps = {
  title: string;
  amount: number;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  background: string;
};

export type IChargeInfoViewProps = ReturnType<typeof ChargeInfoModel>;
