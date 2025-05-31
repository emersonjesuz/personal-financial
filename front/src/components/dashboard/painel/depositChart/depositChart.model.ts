import { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { mes: "Janeiro", valor: 186 },
  { mes: "Fevereiro", valor: 305 },
  { mes: "Março", valor: 237 },
  { mes: "Abril", valor: 1073 },
  { mes: "Maio", valor: 209 },
  { mes: "Junho", valor: 214 },
  { mes: "Julho", valor: 0 },
  { mes: "Agosto", valor: 0 },
  { mes: "Setembro", valor: 10 },
  { mes: "Outubro", valor: 0 },
  { mes: "Novembro", valor: 0 },
  { mes: "Dezembro", valor: 0 },
];
export function DepositChartModel() {
  const chartBarInfo = {
    descriptionCard: "Janeiro - Dezembro",
    descriptionFooter: "Este gráfico exibe a soma total de todos os depósitos realizados em cada mês ao longo de um ano.",
    titleCard: "Depósitos",
  };

  const chartConfig = {
    desktop: {
      label: "Mes",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return {
    chartConfig,
    chartData,
    chartBarInfo,
  };
}
