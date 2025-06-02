export function ChargeActions() {
  return (
    <div className="flex justify-end gap-2 w-full h-fit ">
      <button className="flex items-center justify-center gap-1 px-5 h-10 bg-[#ecedf7] text-[#727c94] rounded-md hover:bg-[#727c94] hover:text-white shadow shadow-black/20 cursor-pointer duration-300">
        <strong>+</strong> Nova Cobrança
      </button>
      <div>
        <input
          className="px-5 h-10 bg-[#ecedf7] text-[#727c94] rounded-md shadow shadow-black/20"
          placeholder="Buscar Cobranças"
        />
      </div>
    </div>
  );
}
