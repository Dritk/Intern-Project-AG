export type FilterType = "yearly" | "monthly" | "weekly";

export type YearlyType =
  | "Jan" | "Feb" | "Mar" | "Apr"
  | "May" | "Jun" | "Jul" | "Aug"
  | "Sep" | "Oct" | "Nov" | "Dec";

export type MonthType =
  | "1" | "2" | "3" | "4"
  | "5" | "6" | "7" | "8"
  | "9" | "10" | "11" | "12";

export type WeeklyType =
  | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";


  export const yearlyFilterValues: YearlyType[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  
  export const monthFilterValues: MonthType[] = [
    "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12",
  ];
  
  export const weeklyFilterValues: WeeklyType[] = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
  ];