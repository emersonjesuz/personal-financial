"use client";
import { ChargeContext } from "@/context/dashboard/despesas/despesas.context";
import { Search } from "lucide-react";
import { use } from "react";

export function ChargeActions() {
  const { handlerChargeModal } = use(ChargeContext);

  return (
    <div className="flex justify-end gap-2 w-full h-fit ">
      <button
        onClick={() => handlerChargeModal({ id: 0, modal: true })}
        className="flex items-center justify-center gap-1 px-5 h-10 bg-[#ecedf7] text-[#727c94] rounded-md hover:bg-[#727c94] hover:text-white shadow shadow-black/20 cursor-pointer duration-300"
      >
        <strong>+</strong> Nova Cobrança
      </button>
      <div className="relative">
        <input
          className="pl-10 h-10 bg-[#ecedf7] text-[#727c94] rounded-md shadow shadow-black/20 "
          placeholder="Buscar Cobranças"
        />
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-[#727c94]" />
      </div>
    </div>
  );
}
