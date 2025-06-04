import { IButtonModalProps } from "./modal.types";

export function ButtonModal(props: IButtonModalProps) {
  return <button {...props}>{props.title}</button>;
}
