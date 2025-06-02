import { IChart } from "@/components/dashboard/painel/expensesChart/expensesChart.type";
import { chartsDb } from "./chartDb";
import { destructureDate, getMonthName, ICharge, MockDataChargeChart } from "./MockDataChargeChart";

export interface IChargeChartService {
  exec: (year: string) => Promise<IChart[]>;
}

export const MockChargeChartService: IChargeChartService = {
  exec: async (year: string): Promise<IChart[]> => {
    const charges: ICharge[] = chartsDb;
    const charts = charges.reduce((acc, charge) => {
      const { month: chartMonth, year: chartYear } = destructureDate(charge.expiredAt);
      const isMonthName = getMonthName(chartMonth);
      if (isMonthName && year === chartYear) {
        const chart = acc.find((item) => item.mes === isMonthName);
        if (chart) {
          return acc.map((item) => {
            if (item.mes === chart.mes) {
              if (!item.year || item.year === year) {
                item.valor = (+item.valor + charge.amount).toFixed(2);
                item.year = year;
              }
            }
            return item;
          });
        }
      }
      return acc;
    }, MockDataChargeChart.map((item) => ({ ...item })) as IChart[]);
    return charts;
  },
};
