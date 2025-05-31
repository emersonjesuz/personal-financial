import { ChargePanelModel } from "@/components/dashboard/painel/chargesPanel/chargesPanel.model";
import { ChargesPanelView } from "@/components/dashboard/painel/chargesPanel/chargesPanel.view";

export default function ChargePanelViewModel() {
  const data = ChargePanelModel();
  return <ChargesPanelView {...data} />;
}
