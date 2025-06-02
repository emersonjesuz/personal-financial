import { ExpensesChartModel } from "./expensesChart.model";

export type IExpensesChartProps = ReturnType<typeof ExpensesChartModel>;

export type IChart = {
  mes: string;
  valor: string;
};
