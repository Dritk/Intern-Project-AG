import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import AppSidebar from "../dashboard/Sidebar";
import { Context } from "../data/context"; 
import { FilterType, YearlyType, MonthType, WeeklyType } from "../data/filterData";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(true);

  const [timeFilter, setTimeFilter] = useState<FilterType>("yearly");
  const [yearlyFilter, setYearlyFilter] = useState<YearlyType>("Jan");
  const [monthFilter, setMonthFilter] = useState<MonthType>("1");
  const [weeklyFilter, setWeeklyFilter] = useState<WeeklyType>("Sun");


  const contextValue = useMemo(
    () => ({
      timeFilter,
      setTimeFilter,
      yearlyFilter,
      setYearlyFilter,
      monthFilter,
      setMonthFilter,
      weeklyFilter,
      setWeeklyFilter,
    }),
    [timeFilter, yearlyFilter, monthFilter, weeklyFilter] 
  );

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
    setToggled((prev) => !prev);
  };

  return (
    <Context.Provider value={contextValue}>
      <div className="flex min-h-screen w-full">
        <AppSidebar collapsed={collapsed} toggled={toggled} />
        <div className="flex flex-col flex-1">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-8 bg-[#F5F5F5]">
            <Outlet />
          </main>
        </div>
      </div>
    </Context.Provider>
  );
};

export default MainLayout;
