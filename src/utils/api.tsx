import axiosInstance from "../config.ts/axiosInstance";

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post("/suppliers/login", data);

  return response.data;
};

export const registerUser = async (data: Record<string, any>) => {
  const response = await axiosInstance.post("/supplier/register", data);
  return response.data;
};

export const forgotPassword = async (data: Record<string, any>) => {
  const response = await axiosInstance.post(
    "/supplier/resetPassword/link",
    data
  );

  return response?.data;
};

export const orderPieChartData = async () => {
  const { data } = await axiosInstance.get("/admin/home/overview/order");
  return data.result;
};

export const homepageSummary = async () => {
  const { data } = await axiosInstance.get("/admin/home/overview");
  return data;
};

export const supplierLikesData = async (
  filter: "yearly" | "monthly" | "weekly"
) => {
  const { data } = await axiosInstance.get(
    `/admin/home/overview/likes?filter=${filter}`
  );
  return data;
};

export const productSalesData = async (
  filter: "yearly" | "monthly" | "weekly"
) => {
  const { data } = await axiosInstance.get(
    `/admin/home/overview/productLikes?filter=${filter}`
  );
  return data;
};

export const fetchNotifications = async () => {
  const { data } = await axiosInstance.get(
    "/admin/notification/list?limit=100&page=1"
  );
  return data.notification;
};

//vagiho8046@avulos.com
