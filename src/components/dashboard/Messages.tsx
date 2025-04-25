import React, { useState } from "react";
import { MessageSquareText } from "lucide-react";

const Messages: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block ">
      <button onClick={toggleDropdown}>
        <MessageSquareText size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-1 translate-x-28 mt-2 w-[400px] bg-white shadow-lg rounded-lg border border-gray-200 z-10 min-h-[500px] overflow-y-auto">
          <div className="flex justify-between items-center px-4 py-5 border-b border-gray-100 ">
            <p className="font-semibold">Messages</p>
            <button className="text-sm text-blue-900 font-medium">
              Mark all as Read
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-10">
            <img
              src="/Empty-order.png"
              alt="Empty Order"
              className="w-48 h-48"
            />
            <p className="flex justify-center mt-2 opacity-50 text-sm text-blue-900 font-medium">
              No Tickets Available
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
