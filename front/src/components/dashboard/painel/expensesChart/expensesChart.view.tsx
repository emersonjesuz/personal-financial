"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { IExpensesChartProps } from "./expensesChart.type";
export function ExpensesChartView(props: IExpensesChartProps) {
  const { chartData, chartBarInfo, chartConfig, formatMoney, listYear, setYear } = props;
  return (
    <Card className="w-full h-full bg-[#ecedf7]">
      <CardHeader>
        <div className="relative">
          <CardTitle>{chartBarInfo.titleCard}</CardTitle>
          <CardDescription>{chartBarInfo.descriptionCard}</CardDescription>
          <div className="absolute right-0 top-0">
            <select
              onChange={(e) => setYear(e.target.value)}
              className="w-20 h-10 border border-[#c4c7d5] rounded-lg"
              name=""
              id=""
            >
              {listYear.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent formatter={(item) => formatMoney(+item)} />} />
            <Bar dataKey="valor" fill="var(--color-desktop)" radius={3} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">{chartBarInfo.descriptionFooter}</div>
      </CardFooter>
    </Card>
  );
}
