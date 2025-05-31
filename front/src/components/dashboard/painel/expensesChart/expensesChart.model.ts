import { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { mes: "Janeiro", valor: 186 },
  { mes: "Fevereiro", valor: 305 },
  { mes: "Março", valor: 237 },
  { mes: "Abril", valor: 1073 },
  { mes: "Maio", valor: 209 },
  { mes: "Junho", valor: 214 },
  { mes: "Julho", valor: 220 },
  { mes: "Agosto", valor: 30 },
  { mes: "Setembro", valor: 10 },
  { mes: "Outubro", valor: 80 },
  { mes: "Novembro", valor: 30 },
  { mes: "Dezembro", valor: 1000 },
];
export function ExpensesChartModel() {
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

  return {
    chartConfig,
    chartData,
    chartBarInfo,
  };
}
