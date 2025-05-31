import { CircleDollarSign, ClockFading, OctagonX } from "lucide-react";
import { IChange } from "./chargesPanel.type";

const charges: IChange[] = [
  { id: 1, title: "Paga", amount: 10000, description: "Cobranças pagas no mes", icon: CircleDollarSign },
  { id: 2, title: "Em aberto", amount: 12000, description: "Cobranças ainda abertas no mes", icon: ClockFading },
  { id: 3, title: "Em atraso", amount: 30000, description: "Cobranças em atraso no mes", icon: OctagonX },
];
export function ChargePanelModel() {
  function formatMoney(money: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(money);
  }

  return {
    charges,
    formatMoney,
  };
}
