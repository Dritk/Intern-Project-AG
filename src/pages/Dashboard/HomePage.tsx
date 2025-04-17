import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const HomePage = () => {
  const [hidden, setHidden] = useState(true);
  const revenue = 12345.67;

  const handleToggleVisibility = () => {
    setHidden(!hidden);
  };

  const formatRevenue = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const displayValue = hidden ? "X XXX.XX" : formatRevenue(revenue);

  return (
    <div className="bg-white  p-6 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-md">
      <div className="">
        <p className="text-blue-900 text-2xl">
          <span className="text-gray-500">Greetings</span>, Annapurna Testing
          Galleries
        </p>
        <p className="text-gray-500 text-md">Your Performance Summary</p>
      </div>

      <div className="bg-blue-500 text-white p-4 rounded-lg w-[15%]  shadow-md">
        <div className="flex items-center mb-1">
          <h3 className="text-sm font-medium">Total Revenue</h3>
          <div className="ml-1 rounded-full  w-5 h-5 flex items-center justify-center border-2 text-xs">
            i
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold ">{displayValue}</p>
          <button
            onClick={handleToggleVisibility}
            className="text-white"
            aria-label={hidden ? "Show revenue" : "Hide revenue"}
          >
            {hidden ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
