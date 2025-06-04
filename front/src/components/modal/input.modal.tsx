import { IInputModelProps } from "./modal.types";

export function InputModal(props: IInputModelProps) {
  return (
    <div className="flex flex-col">
      <input {...props} />
      <span className="text-red-400 pl-2 h-5">{props.error}</span>
    </div>
  );
}
