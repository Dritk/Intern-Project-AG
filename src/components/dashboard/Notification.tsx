import React, { useState } from "react";
import { Bell } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "../../utils/api";

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: notifications,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });

  const renderIcon = (status: any) => {
    switch (status) {
      case "Completed":
        return <img src="/completeordericon.png" alt="Complete Order" />;
      case "Payment Pending":
        return <img src="/pendingordericon.png" alt="Pending Order" />;
      case "Return Accepted":
        return <img src="/returnordericon.png" alt="Return Order" />;
      case "Cancelled":
        return <img src="/cancelordericon.png" alt="Cancel Order" />;
      case "Return Rejected":
        return <img src="/cancelordericon.png" alt="Cancel Order" />;
      default:
        return <img src="/pendingordericon.png" alt="Pending Order" />;
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading notifications</div>;

  return (
    <div className="relative inline-block ">
      <button onClick={toggleDropdown}>
        <Bell size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-1 translate-x-28 mt-2 w-[400px] bg-white shadow-lg rounded-lg border border-gray-200 z-10 max-h-[500px] overflow-y-auto">
          <div className="flex justify-between items-center px-4 py-5 border-b border-gray-100 ">
            <p className="font-semibold">Notifications</p>
            <button className="text-sm text-blue-900 font-medium">
              Mark all as Read
            </button>
          </div>

          <ul className="">
            {notifications?.map((notification: any) => (
              <li
                key={notification.id}
                className="flex px-4 py-5 border-b border-gray-100 "
              >
                <div className="mr-2 w-12">
                  {renderIcon(notification.order_status)}
                </div>
                <div className="ml-2">
                  <div className="text-sm">{notification.message}</div>
                  <p className="text-sm text-gray-600">
                    {new Date(notification.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
