import { useContext } from "react";
import { Funnel } from "lucide-react";

import { yearlyFilterValues, monthFilterValues, weeklyFilterValues, YearlyType, MonthType, WeeklyType } from "../data/filterData";
import { Context } from "../data/context";


type ChartCardProps = {
  title: string;
  headers: string[];
  imageSrc: string;
  message?: string;
};

const ChartCard = ({ title, headers, imageSrc, message }: ChartCardProps) => {
  const {
    timeFilter,
    yearlyFilter,
    setYearlyFilter,
    monthFilter,
    setMonthFilter,
    weeklyFilter,
    setWeeklyFilter,
  } = useContext(Context);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-base font-medium">{title}</p>

        {timeFilter === "yearly" && (
          <div className="relative">
            <select
              value={yearlyFilter}
              onChange={(e) => setYearlyFilter(e.target.value as YearlyType)}
              className="appearance-none cursor-pointer border border-gray-300 rounded py-2 px-8 text-sm"
            >
              {yearlyFilterValues.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center p-2">
              <Funnel className="h-5 w-5" />
            </div>
          </div>
        )}

        {timeFilter === "monthly" && (
          <div className="relative">
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value as MonthType)}
              className="appearance-none cursor-pointer border border-gray-300 rounded py-2 px-8 text-sm"
            >
              {monthFilterValues.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center p-2">
              <Funnel className="h-5 w-5" />
            </div>
          </div>
        )}

        {timeFilter === "weekly" && (
          <div className="relative">
            <select
              value={weeklyFilter}
              onChange={(e) => setWeeklyFilter(e.target.value as WeeklyType)}
              className="appearance-none cursor-pointer border border-gray-300 rounded py-2 px-8 text-sm"
            >
              {weeklyFilterValues.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-1 flex items-center p-2">
              <Funnel className="h-5 w-5" />
            </div>
          </div>
        )}
      </div>

      <hr className="my-4" />
      <div className="flex flex-row gap-x-32">
        {headers.map((header) => (
          <p key={header}>{header}</p>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex justify-center mt-8">
        <img src={imageSrc} alt="Empty State" className="w-48" />
      </div>
      <p className="flex justify-center mt-2 opacity-50 text-sm">{message}</p>
    </div>
  );
};

export default ChartCard;
