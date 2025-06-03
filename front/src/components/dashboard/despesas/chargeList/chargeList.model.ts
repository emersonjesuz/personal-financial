import { FormatDate } from "@/app/hooks/formatDate/formatDate";
import { FormatMoneyBRLHook } from "@/app/hooks/formatMoney/formatMoney";
import { chartsDb } from "@/service/ChargeChart/chartDb";

export function ChargeListModel() {
  const formatMoney = new FormatMoneyBRLHook().exec;
  const formatDate = new FormatDate().exec;

  return {
    formatMoney,
    formatDate,
    chargeData: chartsDb,
  };
}
