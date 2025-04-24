import {
  ShoppingBag,
  ThumbsUp,
  UserPlus,
  Truck,
  X,
  ShoppingCart,
  Package,
} from "lucide-react";

const OverallSummary = ({ summaryData }: { summaryData: any }) => {
  const summary = [
    {
      label: "Total Orders",
      value: summaryData?.totalOrder || 0,
      icon: <ShoppingBag size={28} />,
    },
    {
      label: "Supplier Likes",
      value: summaryData?.totalSupplierLikeCount || 0,
      icon: <ThumbsUp size={28} />,
    },
    {
      label: "Product Likes",
      value: summaryData?.totalProductlike || 0,
      icon: <ThumbsUp size={28} />,
    },
    {
      label: "Followers",
      value: summaryData?.totalFollowers || 0,
      icon: <UserPlus size={28} />,
    },
    {
      label: "Shipped Orders",
      value: summaryData?.shippedOrderCount || 0,
      icon: <Truck size={28} />,
    },
    {
      label: "Cancelled Orders",
      value: summaryData?.cancelledOrderCount || 0,
      icon: <X size={28} />,
    },
    {
      label: "Total Sales",
      value: summaryData?.totalSales || 0,
      icon: <ShoppingCart size={28} />,
    },
    {
      label: "Products",
      value: summaryData?.totalProductCount || 0,
      icon: <Package size={28} />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-[60%]">
      <h2 className="text-md font-semibold text-gray-800 mb-2">
        Overall Summary
      </h2>
      <hr className="mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {summary.map((item) => (
          <div
            key={summaryData}
            className="flex flex-col items-center text-center"
          >
            <div className="text-gray-600 mb-1">{item.icon}</div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-blue-900 text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallSummary;
