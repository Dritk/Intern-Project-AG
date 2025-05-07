import { useState } from "react";
import InputField from "../common/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Slide, toast, ToastContainer } from "react-toastify";
import { loginSchema } from "../../schema/loginSchema";
import { loginUser } from "../../utils/api";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      Cookies.set("token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });

      toast.success("Login successful!", {
        transition: Slide,
        pauseOnFocusLoss: false,
      });

      toast.clearWaitingQueue();
      methods.reset();

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage =
        error.response?.data?.message ?? "Login failed! Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="flex flex-col mr-10 gap-y-3">
        <InputField label="Email" id="email" type="email" />
        <div className="mb-4 relative">
          <InputField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[40px] transform text-gray-500 "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="text-right mb-4">
          <button
            type="button"
            onClick={() => navigate("/forgotpassword")}
            className="text-red-500 underline"
          >
            Forgot Password?
          </button>
        </div>
        <div className="flex flex-row justify-between items-end">
          <p className="text-sm mb-4">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[#444444BF] underline"
            >
              Sign Up
            </button>
          </p>
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer limit={3} />
    </FormProvider>
  );
};

export default LoginSection;
