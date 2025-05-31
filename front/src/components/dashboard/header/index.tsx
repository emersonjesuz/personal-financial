"use client";
import { BellDot, Bolt } from "lucide-react";
import { usePathname } from "next/navigation";

export function HeaderDashboard() {
  const path = usePathname();
  const title = path.replace("/", "");
  return (
    <div className="w-full h-[100px] min-h-[100px] bg-[#ecedf7] border-b border-b-[#c4c7d5] flex items-center justify-between ">
      <div className="w-[80%] mx-auto flex items-center justify-between ">
        <h1 className="capitalize text-[#34425b] text-3xl font-bold">{title || "Painel"}</h1>
        <ul className="flex items-center gap-5">
          <li>
            <button className="flex items-center justify-center w-10 h-10 bg-[#b6bcc4] text-[#ecedf7] rounded-lg hover:bg-[#727c94] cursor-pointer duration-300">
              <BellDot />
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center w-10 h-10 bg-[#b6bcc4] text-[#ecedf7] rounded-lg hover:bg-[#727c94] cursor-pointer duration-300">
              <Bolt />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
