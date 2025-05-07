import { useContext } from "react";
import {
  monthFilterValues,
  MonthType,
  weeklyFilterValues,
  WeeklyType,
  yearlyFilterValues,
  YearlyType,
} from "../data/filterData";
import { Context } from "../data/context";
import CustomDropdown from "../CustomDropdown";
import { useQuery } from "@tanstack/react-query";
import { fetchSupplierLikeDetails } from "../../utils/api";

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["suppliergraph"],
    queryFn: fetchSupplierLikeDetails,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-base font-medium">{title}</p>

        <div className="relative text-black">
          {timeFilter === "yearly" && (
            <CustomDropdown
              options={yearlyFilterValues}
              selectedValue={yearlyFilter}
              onSelect={(val) => setYearlyFilter(val as YearlyType)}
              label="Select Year"
            />
          )}

          {timeFilter === "monthly" && (
            <CustomDropdown
              options={monthFilterValues}
              selectedValue={monthFilter}
              onSelect={(val) => setMonthFilter(val as MonthType)}
              label="Select Year"
            />
          )}

          {timeFilter === "weekly" && (
            <CustomDropdown
              options={weeklyFilterValues}
              selectedValue={weeklyFilter}
              onSelect={(val) => setWeeklyFilter(val as WeeklyType)}
              label="Select Year"
            />
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-row lg:gap-x-32 md:gap-x-14 sm:gap-x-28">
        {headers.map((header) => (
          <p key={header}>{header}</p>
        ))}
      </div>
      <hr />
      <div className="flex justify-center mt-8">
        <img src={imageSrc} alt="Empty State" className="w-48" />
      </div>
      <p className="flex justify-center mt-2 opacity-50 text-sm">{message}</p>
      <div></div>
    </div>
  );
};

export default ChartCard;
