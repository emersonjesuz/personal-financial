import { IChargeInfoViewProps } from "./chargeInfo.type";

export function ChargeInfoView(props: IChargeInfoViewProps) {
  const { dataCardInfo, formatMoney } = props;
  return (
    <div className=" w-full h-fit p-10 bg-[#ecedf7] rounded-md">
      <div className="flex items-center w-full h-full">
        {dataCardInfo.map(({ icon: Icon, ...info }, index) => (
          <div key={index} className="flex items-center gap-5 px-5 w-fit h-full ">
            <div style={{ background: info.background }} className="flex items-center gap-5 p-5 text-white rounded-lg">
              <Icon />
              <p className="flex  flex-col font-bold font-sans">
                {info.title} <span className="font-semibold">{formatMoney(info.amount)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
