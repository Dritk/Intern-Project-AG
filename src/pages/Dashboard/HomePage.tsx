import { DollarSign, ShoppingBag, SquareX, ThumbsUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/common/DashboardMetricCard";
import StatCard from "../../components/common/StatCard";
import OverallSummary from "../../components/common/OverallSummary";
import SupplierLikesChart from "../../components/charts/SupplierLikesChart";
import { homepageSummary } from "../../utils/api";
import ChartCard from "../../components/common/ChartCard";

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["homeSummary"],
    queryFn: homepageSummary,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load dashboard data</p>;

  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-white  p-6 flex flex-row justify-between items-center rounded-lg shadow-md">
        <div>
          <p className="text-blue-900 text-2xl">
            <span className="text-gray-500">Greetings</span>, Annapurna Testing
            Galleries
          </p>
          <p className="text-gray-500 text-md">Your Performance Summary</p>
        </div>

        <Card
          title="Total Revenue"
          bgColor="bg-blue-500"
          value={`रु${data?.totalRevenue?.toLocaleString()}`}
        />
      </div>

      <div className="flex flex-row justify-between gap-x-6">
        <OverallSummary summaryData={data} />
        <div className="bg-white p-6 flex flex-col rounded-lg shadow-md w-2/5">
          <p>Today's Summary</p>
          <hr className="border-t border-gray-200 my-4" />
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              value={data?.recentSupplierLikeCount || 0}
              label="Supplier Likes Today"
              icon={<ThumbsUp className="text-blue-500" size={20} />}
              iconBorderColor="border-blue-500"
            />
            <StatCard
              value={`${(data?.recentSales / 1000).toFixed(1)}K`}
              label="Total Sales Today"
              icon={<DollarSign className="text-green-500" size={20} />}
              iconBorderColor="border-green-500"
            />
            <StatCard
              value={data?.recentOrderCount || 0}
              label="Total Orders Today"
              icon={<ShoppingBag className="text-yellow-500" size={20} />}
              iconBorderColor="border-yellow-500"
            />
            <StatCard
              value={data?.recentCancelledOrderCount || 0}
              label="Order Cancelled Today"
              icon={<SquareX className="text-red-500" size={20} />}
              iconBorderColor="border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row ">
        <div className="bg-white p-6 w-[60%] rounded-md ">
          <SupplierLikesChart />
        </div>
        <div className="bg-white p-6 w-[40%] border border-black text-blue-900 font-medium ">
          <ChartCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
