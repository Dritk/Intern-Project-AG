import { createBrowserRouter, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Signin from "../pages/SignIn";
import Signup from "../pages/Signup";
import ForgotPassword from "../components/signin/ForgotPassword";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/dashboard/HomePage";
import Analytics from "../pages/dashboard/Analytics";
import { JSX } from "react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

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
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "home/analytics", element: <Analytics /> },
    ],
  },
]);

export default router;
