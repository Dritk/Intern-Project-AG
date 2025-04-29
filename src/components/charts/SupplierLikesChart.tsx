import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Label,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supplierLikesData } from "../../utils/api";
import { useContext } from "react";
import { Funnel } from "lucide-react";
import { Context } from "../data/context";



const SupplierLikesChart = () => {

  const { timeFilter, setTimeFilter } = useContext(Context);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["supplierLikes", timeFilter],
    queryFn: () => supplierLikesData(timeFilter),
    staleTime: 1000 * 60 * 1,
  });

  if (isLoading) return <p>Loading chart...</p>;
  if (isError) {
    return <p>Error loading chart data.</p>;
  }

  const chartData = data.like.map(
    (item: { month: string; count: number; day: string }) => ({
      label: item.month || item.day,
      likes: item.count,
    })
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-blue-900">Supplier Likes</h2>

        <div className="relative">
          <select
            value={timeFilter}
            onChange={(e) =>
              setTimeFilter(e.target.value as "yearly" | "monthly" | "weekly")
            }
            className="appearance-none cursor-pointer border border-gray-300 rounded py-2 px-8 text-lg"
          >
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
          <div className="absolute inset-y-0 right-1 flex items-center p-2">
            <Funnel className="h-5 w-5" />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-200 my-4" />

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label">
            <Label value={timeFilter} offset={-2} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Supplier Likes",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="likes"
            stroke="#0d6efd"
            strokeWidth={2}
            fill="#5D9FFF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SupplierLikesChart;