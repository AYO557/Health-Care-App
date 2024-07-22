import React from "react";
import StatMenu from "../../components/authCom/StatMenu";

const appointments = [
  { id: 1, time: "10:00 AM", with: "Dr. Smith" },
  { id: 2, time: "11:00 AM", with: "Dr. Johnson" },
  { id: 3, time: "1:00 PM", with: "Dr. Brown" },
];

const AppointmentPage = () => {
  return (
    <div>
      <StatMenu text={"Back to Dashboard"} />
      <h2 className="font-bold text-3xl py-5">Current Appointment</h2>
      <div className="flex flex-col sm:flex-row gap-3 p-2 sm:h-[30.5rem] rounded-lg">
        <ul className="space-y-2 w-full">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="bg-blue-200 p-4 rounded shadow w-full"
            >
              <p className="text-lg">
                <strong>Time:</strong> {appointment.time}
              </p>
              <p className="text-lg">
                <strong>With:</strong> {appointment.with}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentPage;
