import React from "react";
import { useFormContext } from "react-hook-form";
import { getErrorMessage } from "../../utils/errorHandler";

interface CheckboxFieldProps {
  id: string;
  label: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full ">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={id}
          {...register(id)}
          className="accent-orange-400 w-6 h-6 mt-2"
        />
        <label htmlFor={id} className="mx-2 mt-2 text-gray-500">
          {label}
        </label>
      </div>

      {errors[id]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {getErrorMessage(errors[id])}c
        </p>
      )}
    </div>
  );
};

export default CheckboxField;
