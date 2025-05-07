import { useState } from "react";
import { Funnel } from "lucide-react";

type CustomDropdownProps = {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  label: string;
};

const CustomDropdown = ({
  options,
  selectedValue,
  onSelect,
  label,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border border-gray-300 rounded py-2 px-8 text-base w-full flex items-center justify-between"
      >
        {selectedValue || label}
        <Funnel className="ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded max-h-40 overflow-auto ">
          {options.map((option: string) => (
            <li key={option}>
              <button
                className="w-full text-left p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
