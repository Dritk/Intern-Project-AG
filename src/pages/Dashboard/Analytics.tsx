import ProductSalesChart from "../../components/charts/ProductSalesChart";
import OrderPieChart from "../../components/OrderPieChart";

const Analytics = () => {
  return (
    <div className="w-full min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductSalesChart />
      </div>
      <OrderPieChart />
    </div>
  );
};

export default Analytics;
