export type IActionChargeModal = {
  modal: boolean;
  id: number;
};

export type IChargeContextProps = {
  actionChargeModal: IActionChargeModal;
  handlerChargeModal: (data: IActionChargeModal) => void;
};

export type IChargeContextProvider = { children: React.ReactNode };
