import { IChart } from "@/components/dashboard/painel/expensesChart/expensesChart.type";

export type ICharge = {
  id: number;
  name: string;
  description: string;
  amount: number;
  statusPaiment: string; // "atrasado" | "pago" | "aguardando";
  createdAt: string;
  expiredAt: string;
};

export type MonthKey = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";

export type Idate = {
  month: string;
  year: string;
};

export const MockDataChargeChart: IChart[] = [
  { valor: "0", mes: "Janeiro" },
  { valor: "0", mes: "Fevereiro" },
  { valor: "0", mes: "Março" },
  { valor: "0", mes: "Abril" },
  { valor: "0", mes: "Maio" },
  { valor: "0", mes: "Junho" },
  { valor: "0", mes: "Julho" },
  { valor: "0", mes: "Agosto" },
  { valor: "0", mes: "Setembro" },
  { valor: "0", mes: "Outubro" },
  { valor: "0", mes: "Novembro" },
  { valor: "0", mes: "Dezembro" },
];

const MonthByName: Record<MonthKey, string> = {
  "01": "Janeiro",
  "02": "Fevereiro",
  "03": "Março",
  "04": "Abril",
  "05": "Maio",
  "06": "Junho",
  "07": "Julho",
  "08": "Agosto",
  "09": "Setembro",
  "10": "Outubro",
  "11": "Novembro",
  "12": "Dezembro",
};

export function getMonthName(month: string): string | undefined {
  if (month in MonthByName) {
    return MonthByName[month as MonthKey];
  }
  return undefined;
}

export function destructureDate(date: string): Idate {
  const [year, month] = date?.split("-");
  return {
    month,
    year,
  };
}
