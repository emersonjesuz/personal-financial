import { ChargeListModel } from "./chargeList.model";
import { ChargeListView } from "./chargeList.view";

export function ChargeListViewModel() {
  const data = ChargeListModel();
  return <ChargeListView {...data} />;
}
