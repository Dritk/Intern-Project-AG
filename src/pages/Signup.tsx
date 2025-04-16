import MultiStepForm from "../components/signup/MultiStepForm";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="hidden lg:block lg:w-[50%] h-[100vh] ">
        <img
          src="./Annapurna-bg.png"
          alt="signup"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="w-full  lg:w-[45%] flex flex-col items-start md:m-10 p-10 ">
        <div className="flex flex-col gap-6  w-full">
          <div className="flex justify-start">
            <img src="./Annapurna-logo.png" alt="Logo" className="w-40" />
          </div>

          <h2 className="text-2xl text-[#2C4373] font-medium text-left">
            Create your account
          </h2>

          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
