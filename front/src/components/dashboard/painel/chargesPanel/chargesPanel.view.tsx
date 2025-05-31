import { IChargePanelViewProps } from "./chargesPanel.type";

export function ChargesPanelView(props: IChargePanelViewProps) {
  const { charges, formatMoney } = props;
  return (
    <div className="flex items-center justify-between gap-10">
      {charges.map(({ icon: Icon, ...change }) => (
        <div key={change.id} className="flex flex-col gap-2 w-full h-[150px] bg-[#ecedf7] p-5 rounded-xl shadow shadow-black/30">
          <div className="flex gap-2 items-center w-full text-[#b4b4bf]">
            <Icon /> <h1>{change.title}</h1>
          </div>
          <p className="text-3xl font-bold text-[#34425b]">{formatMoney(change.amount)}</p>
          <p className="text-sm text-[#b4b4bf] mt-5">
            <strong>+</strong> {change.description}
          </p>
        </div>
      ))}
    </div>
  );
}
