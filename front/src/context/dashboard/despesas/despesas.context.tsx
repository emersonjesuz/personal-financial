"use client";
import { createContext, useMemo, useState } from "react";
import { IActionChargeModal, IChargeContextProps, IChargeContextProvider } from "./despesas.type";

const DEFAULT_VALUE: IChargeContextProps = {
  actionChargeModal: { modal: false, id: 0 },
  handlerChargeModal: () => {},
};

export const ChargeContext = createContext(DEFAULT_VALUE);

export function ChargeContextProvider(props: IChargeContextProvider) {
  const { children } = props;
  const [actionChargeModal, setActionChargeModal] = useState<IActionChargeModal>({ modal: false, id: 0 });

  function handlerChargeModal(data: IActionChargeModal) {
    setActionChargeModal(data);
  }
  const memoizedValue = useMemo(
    () => ({
      actionChargeModal,
      handlerChargeModal,
    }),
    [actionChargeModal]
  );

  return <ChargeContext.Provider value={memoizedValue}>{children}</ChargeContext.Provider>;
}
