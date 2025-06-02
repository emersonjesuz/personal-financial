import { ChargeActions } from "@/components/dashboard/despesas/chargeActions/chargeActions";
import { ChargeInfoViewModel } from "@/components/dashboard/despesas/chargeInfo/chargeInfo.viewModel";

export default function Despesas() {
  return (
    <>
      <ChargeActions />
      <ChargeInfoViewModel />
    </>
  );
}
