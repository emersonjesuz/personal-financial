import { Pencil, Trash2 } from "lucide-react";
import { IChargeListItemProps, IChargeListViewProps } from "./chargeList.type";

export function ChargeListView(props: IChargeListViewProps) {
  const { chargeData, formatDate, formatMoney } = props;

  return (
    <div className="grid grid-cols-1 grid-rows-[50px_calc(100vh-580px)] bg-[#ecedf7] rounded-lg p-5">
      <ChargeListHeader />
      <div className="flex flex-col  max-h-[calc(100vh-580px)] overflow-y-auto py-5 pr-2">
        {chargeData
          .filter((item) => item.id < 30)
          .map((item) => (
            <ChargeListItem
              key={item.id}
              {...item}
              createdAt={formatDate(item.createdAt)}
              expiredAt={formatDate(item.expiredAt)}
              amount={formatMoney(item.amount)}
            />
          ))}
      </div>
    </div>
  );
}

function ChargeListHeader() {
  return (
    <div className="border-b border-b-[#c4c7d5]">
      <ul className="grid grid-cols-[60px_repeat(4,1fr)_100px_50px_30px] grid-rows-1 items-center h-[50px] font-bold ">
        <li>#id</li>
        <li>Nome</li>
        <li>Data de criação</li>
        <li>Data de expiração</li>
        <li>Valor</li>
        <li>Status</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

function ChargeListItem(props: IChargeListItemProps) {
  return (
    <ul
      key={props.id}
      className="grid grid-cols-[50px_repeat(4,1fr)_100px_50px_30px] grid-rows-1 items-center h-fit py-2 border-b font-semibold text-[#748495]"
    >
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.createdAt}</li>
      <li>{props.expiredAt}</li>
      <li>{props.amount}</li>
      <li
        data-bg={props.statusPaiment}
        className="flex items-center justify-center py-[2px] text-sm capitalize data-[bg='aguardando']:bg-[#F2C94C] data-[bg='atrasado']:bg-[#FC2C2C] bg-[#28A745] text-white rounded-s-full rounded-e-full "
      >
        {props.statusPaiment}
      </li>
      <li>
        <Pencil className="w-5 h-5 mx-auto text-[#b6bcc4] cursor-pointer hover:scale-105" />
      </li>
      <li>
        <Trash2 className="w-5 h-5 text-[#b6bcc4] cursor-pointer hover:scale-105" />
      </li>
    </ul>
  );
}
