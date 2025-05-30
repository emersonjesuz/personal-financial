import { HandCoins, LayoutPanelLeft, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IButtonMenu } from "./menuLeft.type";

const buttonMenuList: IButtonMenu[] = [
  { id: 1, name: "Painel", path: "/", isSelect: true, icon: LayoutPanelLeft },
  { id: 2, name: "Despesas", path: "/despesas", isSelect: false, icon: HandCoins },
  { id: 3, name: "Receita", path: "/receita", isSelect: false, icon: Wallet },
];

export function MenuLeftModel() {
  const path = usePathname();
  function setSelectButtonByPath() {
    return buttonMenuList.map((item) => {
      item.isSelect = false;
      if (item.path === path) item.isSelect = true;
      return item;
    });
  }

  const [menuList, setMenuList] = useState<IButtonMenu[]>(setSelectButtonByPath);

  function handlerSelect(id: number) {
    setMenuList((list) => {
      return list.map((item) => {
        item.isSelect = false;
        if (item.id === id) item.isSelect = true;
        return item;
      });
    });
  }

  return {
    menuList,
    handlerSelect,
  };
}
