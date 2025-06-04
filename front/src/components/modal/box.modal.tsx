import { IBoxModalProps } from "./modal.types";

export function BoxModal(props: IBoxModalProps) {
  return <div {...props}>{props.children}</div>;
}
