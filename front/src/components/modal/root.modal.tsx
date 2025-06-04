import { IRootModalProps } from "./modal.types";

export function RootModal(props: IRootModalProps) {
  const { modal, children, ...formElement } = props;
  return (
    <div data-open={modal} className="data-[open=false]:hidden block">
      <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/40">
        <form {...formElement}>{children}</form>
      </div>
    </div>
  );
}
