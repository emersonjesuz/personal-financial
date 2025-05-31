import { DepositChartModel } from "./depositChart.model";
import { DepositChartView } from "./depositChart.view";
export function DepositChartViewModel() {
  const data = DepositChartModel();
  return <DepositChartView {...data} />;
}
