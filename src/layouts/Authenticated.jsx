import React from "react";
import { FaBell, FaClock, FaUser } from "react-icons/fa";
import { IoHome, IoSettings } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const sideButtons = [
  {
    icon: <IoHome size={30} color="#030346" />,
    title: "Home",
    path: "/",
    exact: true,
  },
  {
    icon: <FaClock size={30} color="#030346" />,
    title: "Appointments",
    path: "appointment",
    exact: true,
  },
  {
    icon: <FaUser size={30} color="#030346" />,
    title: "Doctor",
    path: "doctor",
    exact: true,
  },
  {
    icon: <FaBell size={30} color="#030346" />,
    title: "Notifications",
    path: "notifications",
    exact: true,
  },
  {
    icon: <IoSettings size={30} color="#030346" />,
    title: "Settings",
    path: "settings",
    exact: true,
  },
];

const Authenticated = () => {
  return (
    <main className="flex h-[100vh] bg-[#c0cff2] p-1 justify-center items-center text-[#030346]">
      <div className="h-full w-full rounded-lg flex flex-col-reverse sm:gap-1 sm:flex-row text">
        <nav className="h-[7vh] sm:h-full w-full sm:w-[5%] rounded-lg bg-blue-500 sm:flex sm:flex-col gap-5 sm:justify-center sm:items-center lg:max-h-[100vh]">
          <div className="flex flex-row sm:flex-col gap-5 w-full justify-center sm:items-center">
            {sideButtons.map(({ icon, title, path, exact }, index) => (
              <NavLink
                key={index}
                title={title}
                to={path}
                exact={exact}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active bg-[#a0b3da]"
                    : isPending
                    ? "pending bg-[#d3dae9]"
                    : ""
                }
              >
                <span className="h-14 w-14 rounded-lg sm:rounded-full flex justify-center items-center hover:bg-[#c0cff2] hover:cursor-pointer">
                  {icon}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>
        <main className="bg-[aliceblue] w-full rounded-lg h-full overflow-auto sm:p-8 p-2">
          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default Authenticated;
