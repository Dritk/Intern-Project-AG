import { useQuery } from "@tanstack/react-query";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { orderPieChartData } from "../utils/api";

const COLORS: Record<string, string> = {
  painting: "#0068B9",
  digital: "#00E396",
  sketch: "#FEB019",
  sculpture: "#FF4560",
  photogrpahy: "#8F1EF2",
  prints: "#008FFB",
};

const OrderPieChart = () => {
  const {
    data: pieData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["activityData"],
    queryFn: orderPieChartData,
  });

  if (isLoading) return <p>Loading chart...</p>;
  if (isError) return <p>Error loading chart data.</p>;

  const RADIAN = Math.PI / 180;
  const PERCENT_THRESHOLD = 0.05;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    if (percent < PERCENT_THRESHOLD) return null;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const sortedData = pieData?.sort(
    (a: { id: number }, b: { id: number }) => b.id - a.id
  );

  return (
    <div className="p-10">
      <ResponsiveContainer width="100%" height={800}>
        <PieChart>
          <Pie
            data={sortedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={300}
            dataKey="count"
            nameKey="name"
            startAngle={-260}
          >
            {pieData.map((entry: { id: number; name: string }) => (
              <Cell
                key={`cell-${entry.id}`}
                fill={COLORS[entry.name] || "#8F1EF2"}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderPieChart;
