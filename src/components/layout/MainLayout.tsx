import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import AppSidebar from "../dashboard/Sidebar";
import { Context } from "../data/context";
import {
  FilterType,
  YearlyType,
  MonthType,
  WeeklyType,
} from "../data/filterData";

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
      <div className="flex w-full overflow-hidden">
        <div
          className={`fixed h-full z-20 transition-all duration-300 shadow-md md:${
            collapsed ? "w-[80px]" : "w-[250px]"
          }`}
        >
          <AppSidebar
            collapsed={collapsed}
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
          />
        </div>

        <div
          className={`flex flex-col flex-1 transition-all ease-in-out duration-300 ${
            collapsed ? "ml-[80px]" : "ml-[250px]"
          }`}
        >
          <div
            className={`fixed z-10 bg-white shadow-md transition-all ease-in-out duration-300 ${
              collapsed
                ? "left-[80px] w-[calc(100%-80px)]"
                : "left-[250px] w-[calc(100%-250px)]"
            }`}
          >
            <Navbar toggleSidebar={toggleSidebar} />
          </div>

          <main className="flex-1 p-8 bg-[#F5F5F5] mt-10 pt-14">
            <Outlet />
          </main>
        </div>
      </div>
    </Context.Provider>
  );
};

export default MainLayout;
