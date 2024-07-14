import React from "react";
import { FaBell, FaClock, FaUser } from "react-icons/fa";
import { IoHome, IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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
const NavBox = () => {
  return (
    <nav className="h-[7vh] sm:h-full w-full sm:w-[5%] fixed sm:static rounded-lg bg-blue-500 sm:flex sm:flex-col gap-5 sm:justify-center sm:items-center lg:max-h-[100vh]">
      <div className="flex flex-row sm:flex-col gap-5 w-full justify-center items-center sm:items-center">
        {sideButtons.map(({ icon, title, path, exact }, index) => (
          <NavLink
            key={index}
            title={title}
            to={path}
            exact={exact}
            className={({ isActive, isPending }) =>
              isActive
                ? "active bg-[#a0b3da] rounded-full"
                : isPending
                ? "pending bg-[#d3dae9] rounded-full"
                : ""
            }
          >
            <span className="h-12 w-12 rounded-lg sm:rounded-full flex justify-center items-center hover:bg-[#d3dae9] hover:cursor-pointer">
              {icon}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBox;
