"use client";
import { MenuLeftModel } from "./menuLeft.model";
import { MenuLeftListView } from "./menuLeft.view";

export function MenuLeftViewModel() {
  const data = MenuLeftModel();
  return <MenuLeftListView {...data} />;
}
