import { FormatMoneyBRLHook } from "@/app/hooks/formatMoney/formatMoney";
import { ChargeActions } from "@/components/dashboard/despesas/chargeActions/chargeActions";
import { ChargeInfoViewModel } from "@/components/dashboard/despesas/chargeInfo/chargeInfo.viewModel";
import { ChargeListViewModel } from "@/components/dashboard/despesas/chargeList/chargeList.viewModel";
import { chartsDb } from "@/service/ChargeChart/chartDb";
import { Pencil, Trash2 } from "lucide-react";
import moment from "moment";

export default function Despesas() {
  const formatMoney = new FormatMoneyBRLHook().exec;

  function formatDate(date: string) {
    return moment(date).subtract(10, "days").calendar();
  }
  return (
    <>
      <ChargeInfoViewModel />
      <ChargeActions />
      <ChargeListViewModel />
    </>
  );
}
