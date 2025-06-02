import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExpensesChartModel } from "./expensesChart.model";
import { ExpensesChartView } from "./expensesChart.view";
const queryClient = new QueryClient();
export function ExpensesChartViewModel() {
  const data = ExpensesChartModel();
  return (
    <QueryClientProvider client={queryClient}>
      <ExpensesChartView {...data} />
    </QueryClientProvider>
  );
}
