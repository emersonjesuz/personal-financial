import ContainerDashBoard from "@/components/dashboard/containerDashBoard/containerDashboard";
import ChargePanelModelView from "@/components/dashboard/painel/chargesPanel/chargePanel.viewModel";
import { DepositChartViewModel } from "@/components/dashboard/painel/depositChart/depositChart.viewModel";
import { ExpensesChartViewModel } from "@/components/dashboard/painel/expensesChart/expensesChart.viewModel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function PainelView() {
  return (
    <ContainerDashBoard>
      <ChargePanelModelView />
      <div className="flex items-center gap-10 max-h-[550px] w-full">
        <DepositChartViewModel />
        <ExpensesChartViewModel />
      </div>
    </ContainerDashBoard>
  );
}
