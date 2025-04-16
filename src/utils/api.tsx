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
//vagiho8046@avulos.com
