import { BoxModal } from "./box.modal";
import { ButtonModal } from "./button.modal";
import { InputModal } from "./input.modal";
import { LabelModel } from "./label.modal";
import { RootModal } from "./root.modal";
import { TitleModal } from "./title.modal";

export const Modal = {
  root: RootModal,
  box: BoxModal,
  label: LabelModel,
  input: InputModal,
  button: ButtonModal,
  title: TitleModal,
};
