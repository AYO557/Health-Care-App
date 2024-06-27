import React from "react";
import { FaBell } from "react-icons/fa";
import StatMenu from "../../components/authCom/StatMenu";

// const Notifications = [
//   { id: 1, message: "Appointment confirmed with Dr. Smith", time: "10:00 AM" },
//   { id: 2, message: "New test results available", time: "11:00 AM" },
//   { id: 3, message: "Reminder: Follow-up visit tomorrow", time: "1:00 PM" },
// ];

const NotificationPage = () => {
  return (
    <div className="sm:h-[74vh] h-[80vh]">
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Settings</h2>
      <div className="p-4 bg-blue-200 rounded-lg flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-1">
          <FaBell size={30} color="#030346" />
          <h1 className="text-2xl text-[#030346] font-bold">
            No Notification Yet
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
