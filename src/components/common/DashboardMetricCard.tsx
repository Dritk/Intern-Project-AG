import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CardProps {
  title: string;
  value: string | number;
  bgColor?: string;
  tooltip?: string;
}

const Card: React.FC<CardProps> = ({ title, value, bgColor, tooltip }) => {
  const [hidden, setHidden] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleToggleVisibility = () => {
    setHidden(!hidden);
  };

  const displayValue = hidden ? "X XXX.XX" : value;

  return (
    <div
      className={`${bgColor} text-white p-4 rounded-lg shadow-md lg:w-[15%] md:w-[25%] w-2/4`}
    >
      <div className="flex items-center">
        <h3 className="text-sm font-medium">{title}</h3>
        {tooltip && (
          <div className="ml-1 relative">
            <button
              className="rounded-full w-5 h-5 flex items-center justify-center border-2 text-xs cursor-pointer"
              aria-label="Information"
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              i
            </button>
            {isTooltipVisible && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-[#6D6D6D] text-white text-xs rounded whitespace-normal w-80 ">
                {tooltip}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">{displayValue}</p>
        <button
          onClick={handleToggleVisibility}
          className="text-white"
          aria-label={hidden ? "Show revenue" : "Hide revenue"}
        >
          {hidden ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Card;
