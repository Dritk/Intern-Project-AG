import { useState } from "react";
import InputField from "../common/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { preventNumbers, preventAlphabets } from "../../utils/inputHandlers";

const PersonalInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="input-div">
        <InputField
          label="First Name"
          id="firstName"
          onKeyDown={preventNumbers}
        />
        <InputField
          label="Middle Name"
          id="middleName"
          onKeyDown={preventNumbers}
        />
        <InputField
          label="Last Name"
          id="lastName"
          onKeyDown={preventNumbers}
        />
      </div>

      <div className="input-div">
        <InputField label="Email" id="email" type="email" />
        <InputField
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          onKeyDown={preventAlphabets}
        />
      </div>

      <div className="input-div">
        <div className="relative w-full">
          <InputField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[40px] transform text-gray-500 "
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <div className="relative  w-full">
          <InputField
            label="Confirm Password"
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-[40px] transform text-gray-500 "
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
