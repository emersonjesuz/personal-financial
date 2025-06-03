import ContainerDashBoard from "@/components/dashboard/containerDashBoard/containerDashboard";
import { HeaderDashboard } from "@/components/dashboard/header";
import { MenuLeftViewModel } from "@/components/dashboard/MenuLeft/menuLeft.modelView";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-1 max-h-screen min-h-screen overflow-hidden">
      <MenuLeftViewModel />
      <div className="flex flex-col">
        <HeaderDashboard />
        <main className="flex items-center justify-center w-full mx-auto max-h-[calc(100vh - 100px)] h-full min-h-[calc(100vh - 100px)] bg-[#c4c7d5]">
          <div className="w-[80%] h-full">
            <ContainerDashBoard>{children}</ContainerDashBoard>
          </div>
        </main>
      </div>
    </div>
  );
}
