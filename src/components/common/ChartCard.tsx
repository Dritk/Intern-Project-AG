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
import { SupplierLikeResponse } from "../../utils/types/chartCardTypes";
import { ThumbsUp } from "lucide-react";

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

  let filterValue;
  if (timeFilter === "yearly") {
    filterValue = yearlyFilter;
  } else if (timeFilter === "monthly") {
    filterValue = monthFilter;
  } else {
    filterValue = weeklyFilter;
  }

  const { data } = useQuery<SupplierLikeResponse>({
    queryKey: ["supplierLikes", timeFilter, filterValue],
    queryFn: () => fetchSupplierLikeDetails(timeFilter, filterValue),
    enabled: !!filterValue,
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

      <div className="flex justify-between font-semibold py-2 px-3 text-sm">
        <div className="flex gap-12">
          <p>{headers[0]}</p>
          <p>{headers[1]}</p>
        </div>

        <p>{headers[2]}</p>
      </div>

      <hr />

      {data?.result.length ? (
        <div className="mt-2 space-y-5">
          {data.result.map((item, index) => (
            <div
              key={item.supplier.id}
              className="flex items-center justify-between text-sm mb-2 p-4 "
            >
              <p className="text-gray-600 font-medium w-5">{index + 1}</p>

              <div className="flex items-center gap-2 flex-1 ml-12">
                <img
                  src="https://devportal.annapurnagalleries.com/defaultimage.png"
                  alt={`${item.supplier.first_name}'s profile`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p>
                    {item.supplier.first_name} {item.supplier.middle_name}{" "}
                    {item.supplier.last_name}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500">
                    {item.supplier.totalLikes}
                    <ThumbsUp size={14} color="red" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={item.user[0]?.userImage || "defaultImage.png"}
                  alt={item.user[0]?.fullName || "User"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-8">
          <img src={imageSrc} alt="Empty State" className="w-48" />
          <p className="opacity-50 text-sm mt-2">{message}</p>
        </div>
      )}
      <hr className="mt-6" />
    </div>
  );
};

export default ChartCard;
