import { useFormContext } from "react-hook-form";
import { getErrorMessage } from "../../utils/errorHandler";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  onKeyDown,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <label htmlFor={id} className="block  text-[#2C4373]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className="border border-gray-300 rounded-md w-full p-3 outline-none"
        autoComplete="off"
        onKeyDown={onKeyDown}
      />

      {errors[id]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {getErrorMessage(errors[id])}
        </p>
      )}
    </div>
  );
};

export default InputField;
