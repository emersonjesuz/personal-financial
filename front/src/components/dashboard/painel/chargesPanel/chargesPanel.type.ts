import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ChargePanelModel } from "./chargesPanel.model";

export type IChange = {
  id: number;
  title: string;
  amount: number;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export type IChargePanelViewProps = ReturnType<typeof ChargePanelModel>;
