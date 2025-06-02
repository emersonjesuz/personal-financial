import { CircleDollarSign, ClockFading, OctagonX, Wallet } from "lucide-react";
import { ICardInfoProps } from "./chargeInfo.type";
import { FormatMoneyBRLHook } from "@/app/hooks/formatMoney/formatMoney";

const dataCardInfo: ICardInfoProps[] = [
  { title: "Receita", amount: 20660, background: "#34425B", icon: Wallet },
  { title: "Pago", amount: 1200, background: "#28A745", icon: CircleDollarSign },
  { title: "Em aberto", amount: 55200, background: "#F2C94C", icon: ClockFading },
  { title: "Atrasado", amount: 200, background: "#FC2C2C", icon: OctagonX },
];
export function ChargeInfoModel() {
  const formatMoney = new FormatMoneyBRLHook().exec;
  return {
    dataCardInfo,
    formatMoney,
  };
}
