import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../components/signin/ForgotPassword";
import Signin from "../pages/SignIn";
import Signup from "../pages/Signup";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/Dashboard/HomePage";
import Analytics from "../pages/Dashboard/Analytics";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "home/analytics", element: <Analytics /> },
    ],
  },
]);

export default router;
