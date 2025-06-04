import { ILabelModalProps } from "./modal.types";

export function LabelModel(props: ILabelModalProps) {
  return <p {...props}>{props.labelText}</p>;
}
