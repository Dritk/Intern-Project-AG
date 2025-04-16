import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../common/InputField";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../../schema/forgotPasswordSchema";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../utils/api";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(forgotPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log("Reset instructions sent!", data);

      toast.success("Check your email for reset instructions!", {
        transition: Slide,
        pauseOnFocusLoss: false,
      });

      toast.clearWaitingQueue();
      methods.reset();
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "Failed to send reset email.";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <FormProvider {...methods}>
      <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 w-full max-w-md mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md"
        >
          <h1 className="text-xl sm:text-2xl text-[#2C4373] font-medium">
            Reset your password
          </h1>
          <InputField label="Email" id="email" type="email" />
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200 mt-2"
          >
            Send me reset instructions
          </button>
          <div className="text-sm sm:text-md mt-4 flex flex-wrap items-center justify-center gap-x-2">
            <span>Don't need to reset?</span>
            <button
              type="button"
              onClick={() => navigate("/signin")}
              className="text-[#444444BF] underline hover:text-[#2C4373]"
            >
              Log in
            </button>
            <span>or</span>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[#444444BF] underline hover:text-[#2C4373]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer limit={3} />
    </FormProvider>
  );
};

export default ForgotPassword;
