import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CardProps {
  title: string;
  value: string | number;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({ title, value, bgColor }) => {
  const [hidden, setHidden] = useState(true);

  const handleToggleVisibility = () => {
    setHidden(!hidden);
  };

  const displayValue = hidden ? "X XXX.XX" : value;

  return (
    <div className={`${bgColor} text-white p-4 rounded-lg shadow-md w-[15%]`}>
      <div className="flex items-center ">
        <h3 className="text-sm font-medium">{title}</h3>
        <div
          className={`ml-1 rounded-full w-5 h-5 flex items-center justify-center text-justify border-2 text-xs`}
        >
          i
        </div>
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
