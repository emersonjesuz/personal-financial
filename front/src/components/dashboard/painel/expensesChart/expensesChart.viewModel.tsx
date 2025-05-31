import { ExpensesChartModel } from "./expensesChart.model";
import { ExpensesChartView } from "./expensesChart.view";
export function ExpensesChartViewModel() {
  const data = ExpensesChartModel();
  return <ExpensesChartView {...data} />;
}
