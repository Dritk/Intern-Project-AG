import LoginSection from "../components/signin/LoginSection";

const Signin = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="hidden lg:block lg:w-[50%] h-[100vh] ">
        <img
          src="./Annapurna-login-bg.png"
          alt="signin"
          className="w-full h-full object-fit"
        />
      </div>

      <div className="w-full  lg:w-[35%] flex flex-col  items-start md:m-10 p-10 ">
        <div className="flex flex-col gap-6  w-full">
          <div className="flex justify-start">
            <img src="./Annapurna-logo.png" alt="Logo" className="w-40" />
          </div>

          <h2 className="text-2xl text-[#2C4373] font-medium ">Login</h2>

          <LoginSection />
        </div>
      </div>
    </div>
  );
};

export default Signin;
