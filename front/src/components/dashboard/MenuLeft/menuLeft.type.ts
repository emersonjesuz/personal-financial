import { MenuLeftModel } from "./menuLeft.model";

export type IButtonMenu = {
  id: number;
  path: string;
  name: string;
  icon: any;
  isSelect: boolean;
};

export interface ButtonMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dataButton: IButtonMenu;
}

export type IMenuLeftViewProps = ReturnType<typeof MenuLeftModel>;
