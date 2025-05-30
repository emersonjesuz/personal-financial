import { HeaderDashboard } from "@/components/dashboard/header";
import { MenuLeftViewModel } from "@/components/dashboard/MenuLeft";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-1 max-h-screen min-h-screen">
      <MenuLeftViewModel />
      <div className="flex flex-col">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  );
}
