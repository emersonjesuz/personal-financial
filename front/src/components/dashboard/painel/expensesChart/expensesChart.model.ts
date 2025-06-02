import { FormatMoneyBRLHook } from "@/app/hooks/formatMoney/formatMoney";
import { ChartConfig } from "@/components/ui/chart";
import { MockChargeChartService } from "@/service/ChargeChart/ChargeChart.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const listYear = ["2024", "2025"];
export function ExpensesChartModel() {
  const [year, setYear] = useState("2024");
  const formatMoney = new FormatMoneyBRLHook().exec;
  const chartBarInfo = {
    descriptionCard: "Janeiro - Dezembro",
    descriptionFooter: "Este gráfico exibe a soma total de todas as despesas realizadas em cada mês ao longo de um ano.",
    titleCard: "Despesas",
  };

  const chartConfig = {
    desktop: {
      label: "Mes",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  const { data: chartData } = useQuery({
    queryKey: ["charge-chart", year],
    queryFn: async () => await MockChargeChartService.exec(year),
  });

  return {
    chartConfig,
    chartData,
    chartBarInfo,
    formatMoney,
    listYear,
    year,
    setYear,
  };
}
