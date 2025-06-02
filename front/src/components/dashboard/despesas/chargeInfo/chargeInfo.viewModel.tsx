import { ChargeInfoModel } from "./chargeInfo.model";
import { ChargeInfoView } from "./chargeInfo.view";

export function ChargeInfoViewModel() {
  const data = ChargeInfoModel();
  return <ChargeInfoView {...data} />;
}
