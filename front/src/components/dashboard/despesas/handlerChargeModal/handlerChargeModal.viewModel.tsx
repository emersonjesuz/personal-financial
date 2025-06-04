"use client";
import { HandlerChargeModalModel } from "./handlerChargeModal.model";
import { HandlerChargeModalView } from "./handlerChargeModal.view";

export function HandlerChargeModalViewModel() {
  const data = HandlerChargeModalModel();
  return <HandlerChargeModalView {...data} />;
}
