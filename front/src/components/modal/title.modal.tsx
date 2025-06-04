import { ITitleModalProps } from "./modal.types";

export function TitleModal(props: ITitleModalProps) {
  return (
    <div {...props}>
      <h1>{props.titleText}</h1>
    </div>
  );
}
