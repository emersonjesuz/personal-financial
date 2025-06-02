"use client";
import ChargePanelModelView from "@/components/dashboard/painel/chargesPanel/chargePanel.viewModel";
import { DepositChartViewModel } from "@/components/dashboard/painel/depositChart/depositChart.viewModel";
import { ExpensesChartViewModel } from "@/components/dashboard/painel/expensesChart/expensesChart.viewModel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-10 w-full h-full pt-10">
        <ChargePanelModelView />
        <div className="flex items-center gap-10 max-h-[550px] w-full">
          <DepositChartViewModel />
          <ExpensesChartViewModel />
        </div>
      </div>
    </QueryClientProvider>
  );
}

//  os meses que mais tiveram despesar graficos
