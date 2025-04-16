import React from "react";
import { useFormContext } from "react-hook-form";
import { getErrorMessage } from "../../utils/errorHandler";

interface TextAreaFieldProps {
  label: string;
  id: string;
  rows?: number;
  placeholder?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  rows = 4,
  placeholder = "Write a short biography...",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor={id} className="block text-[#2C4373]">
        {label}
      </label>
      <textarea
        id={id}
        {...register(id)}
        rows={rows}
        className="border border-gray-300 rounded-lg w-full px-3 py-2 text-gray-700 resize-none outline-none"
        placeholder={placeholder}
      />
      {errors[id]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {getErrorMessage(errors[id])}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
