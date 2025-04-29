import { createContext } from "react";
import { FilterType, YearlyType, MonthType, WeeklyType } from "../data/filterData";

interface ContextType {
  timeFilter: FilterType;
  setTimeFilter: (filter: FilterType) => void;
  yearlyFilter: YearlyType;
  setYearlyFilter: (year: YearlyType) => void;
  monthFilter: MonthType;
  setMonthFilter: (month: MonthType) => void;
  weeklyFilter: WeeklyType;
  setWeeklyFilter: (week: WeeklyType) => void;
}

export const Context = createContext<ContextType>({
  timeFilter: "yearly",
  setTimeFilter: () => {},
  yearlyFilter: "Jan",
  setYearlyFilter: () => {},
  monthFilter: "1",
  setMonthFilter: () => {},
  weeklyFilter: "Sun",
  setWeeklyFilter: () => {},
});
