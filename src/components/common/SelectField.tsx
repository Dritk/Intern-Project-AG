import React from "react";
import { useFormContext } from "react-hook-form";
import { getErrorMessage } from "../../utils/errorHandler";

interface SelectFieldProps {
  label: string;
  id: string;
  options: { label: string; value: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, id, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-[#2C4373]">
        {label}
      </label>
      <select
        id={id}
        {...register(id)}
        className="border border-gray-300 rounded-lg w-full p-3 outline-none"
      >
        <option value="" className="text-gray-400 rounded-lg">
          --Select--
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[id]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {getErrorMessage(errors[id])}
        </p>
      )}
    </div>
  );
};

export default SelectField;
