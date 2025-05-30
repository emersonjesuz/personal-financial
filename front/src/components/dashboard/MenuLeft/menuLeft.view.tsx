import { Landmark } from "lucide-react";
import Link from "next/link";
import { ButtonMenuProps, IMenuLeftViewProps } from "./menuLeft.type";

export function MenuLeftListView(props: IMenuLeftViewProps) {
  const { handlerSelect, menuList = [] } = props;
  return (
    <div className="w-[250px] h-full  bg-[#ecedf7] grid grid-rows-[200px_1fr] grid-cols-1 border-r border-r-[#727c94]">
      <div className="flex  items-center justify-center w-full h-[60%] text-[#34425b] ">
        <Landmark className="w-[40px] h-[40px]" />
        <h1 className="font-bold font-sans">Financeiro Pessoal</h1>
      </div>
      <div className="w-full flex flex-col gap-2 px-2">
        {menuList.map((item) => (
          <ButtonMenu key={item.path} dataButton={item} onClick={() => handlerSelect(item.id)} />
        ))}
      </div>
    </div>
  );
}

function ButtonMenu({ dataButton, ...props }: ButtonMenuProps) {
  const { icon: Icon, name, path = "/", isSelect = false } = dataButton;
  return (
    <button {...props}>
      <Link href={path}>
        <div
          data-select={isSelect}
          className="flex items-center gap-1 h-[50px] pl-2 text-[#b6bcc4] data-[select=true]:bg-[#34425b] data-[select=true]:text-white rounded-lg cursor-pointer data-[select=false]:hover:bg-[#727c94]"
        >
          <Icon />
          <span>{name}</span>
        </div>
      </Link>
    </button>
  );
}
