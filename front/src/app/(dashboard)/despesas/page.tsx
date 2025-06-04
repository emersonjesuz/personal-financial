import { ChargeActions } from "@/components/dashboard/despesas/chargeActions/chargeActions";
import { ChargeInfoViewModel } from "@/components/dashboard/despesas/chargeInfo/chargeInfo.viewModel";
import { ChargeListViewModel } from "@/components/dashboard/despesas/chargeList/chargeList.viewModel";
import { HandlerChargeModalViewModel } from "@/components/dashboard/despesas/handlerChargeModal/handlerChargeModal.viewModel";
import { ChargeContextProvider } from "@/context/dashboard/despesas/despesas.context";

export default function Despesas() {
  return (
    <ChargeContextProvider>
      <ChargeInfoViewModel />
      <ChargeActions />
      <ChargeListViewModel />
      <HandlerChargeModalViewModel />
    </ChargeContextProvider>
  );
}
