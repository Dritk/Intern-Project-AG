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
    <div className="flex flex-col gap-y-6 ">
      <div className="bg-white  p-6 flex md:flex-row flex-col justify-between items-center rounded-lg shadow-md">
        <div>
          <p className="text-blue-900 text-2xl">
            <span className="text-gray-500">Greetings</span>, Annapurna Testing
            Galleries
          </p>
          <p className="text-gray-500 text-md mb-2">Your Performance Summary</p>
        </div>

        <Card
          title="Total Revenue"
          bgColor="bg-blue-500"
          value={`रु${data?.totalRevenue?.toLocaleString()}`}
          tooltip="Total revenue is all the money we made from selling 
          stuff on our site ( annapurna galleries comission rate+ amount 
          to be received by supplier excluding comission rate). We subtract 
          the returns and cancellations but don't count shipping costs or discounts. 
          Here's the formula:Total Revenue = Total Ordered Product Amount – Ordered 
          Product Returns(if any) - Ordered Product Cancellations (if any) 
          Net Profit: Net profit is the total amount we received as commission from 
          the supplier. Also amounts will be deducted if ordered products gets returned 
          or canceled.Net Profit = Total Commision Sum - Product Returns Commision Sum 
          (if any) - Product Cancellations Commision Sum (if any)"
        />
      </div>

      <div className="flex md:flex-row flex-col justify-between md:gap-x-6 gap-y-6 ">
        <OverallSummary summaryData={data} />
        <div className="bg-white p-6 flex flex-col w-full rounded-lg shadow-md md:w-2/5">
          <p className="text-blue-900 font-medium">Today's Summary</p>
          <hr />
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

      <div className="w-full flex md:flex-row flex-col ">
        <div className="bg-white p-6 md:w-[60%] w-full  ">
          <SupplierLikesChart />
        </div>
        <div className="bg-white p-6 md:w-[40%] w-full border border-gray-200  text-blue-900 font-medium ">
          <ChartCard
            title="Supplier Likes Graph Analysis"
            headers={["S/N", "Supplier Details", "UserList"]}
            imageSrc="./Empty-product.png"
            message="No Suppliers are liked by users during this period."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
