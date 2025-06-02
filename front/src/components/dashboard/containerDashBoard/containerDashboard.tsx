"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function ContainerDashBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-10 w-full h-full pt-10">{children}</div>
    </QueryClientProvider>
  );
}
