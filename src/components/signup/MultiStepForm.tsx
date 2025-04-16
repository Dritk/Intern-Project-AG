import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalInfo from "./PersonalInfo";
import ProfileDetail from "./ProfileDetail";
import ContactInfo from "./ContactInfo";
import Biography from "./Biography";
import { useNavigate } from "react-router-dom";
import { ObjectSchema } from "yup";
import { personalInfoSchema } from "../../schema/personalInfoSchema";
import { profileDetailSchema } from "../../schema/profileDetailSchema";
import { contactInfoSchema } from "../../schema/contactInfoSchema";
import { biographySchema } from "../../schema/biographySchema";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../utils/api";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState<Record<string, any>>({});

  const stepSchemas = [
    personalInfoSchema,
    profileDetailSchema,
    contactInfoSchema,
    biographySchema,
  ];

  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(stepSchemas[step - 1] as ObjectSchema<any>),
    defaultValues: formData,
  });

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid && step < totalSteps) {
      setFormData((prev) => ({ ...prev, ...methods.getValues() }));
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("Account created successfully!", {
        transition: Slide,
        pauseOnFocusLoss: false,
      });
      toast.clearWaitingQueue();
      methods.reset();
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Signup failed!");
    },
  });

  const onSubmit = (data: any) => {
    const finalData = { ...formData, ...data };
    mutation.mutate(finalData);
  };

  return (
    <FormProvider {...methods}>
      <p className="text-[#FF5959] text-base font-medium">
        Step {step} of {totalSteps}
      </p>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <PersonalInfo />}
        {step === 2 && <ProfileDetail />}
        {step === 3 && <ContactInfo />}
        {step === 4 && <Biography />}

        <div className="flex flex-row justify-between mt-8 gap-4">
          {step === 1 && (
            <p className="text-sm ">
              Have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-[#444444BF] underline"
              >
                Log In
              </button>
            </p>
          )}

          <div className="flex gap-3 ml-auto justify-end">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="px-4 py-2 ">
                Previous
              </button>
            )}

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Sign up
              </button>
            )}
          </div>
        </div>
      </form>
      <ToastContainer limit={3} />
    </FormProvider>
  );
};

export default MultiStepForm;
