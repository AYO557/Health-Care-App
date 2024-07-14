import React from "react";
import { FaBell, FaRegImage } from "react-icons/fa";
import { IoIosArrowDropdown, IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const StatMenu = ({ text, icon = true }) => {
  return (
    <header className="flex justify-between items-center sm:h-[5vh]">
      <Link to={icon === "auth" ? "/auth" : "/"}>
        <div className="font-semibold hover:text-blue-400 flex items-center gap-2">
          <IoMdArrowRoundBack size={20} />
          <h2>{text}</h2>
        </div>
      </Link>
      <div className="flex items-center gap-3 font-bold">
        <Link to={"/notifications"}>
          <FaBell className="hidden sm:block hover:text-blue-400" size={20} />
        </Link>
        <FaRegImage size={20} className="ml-auto" />
        <h2 className="hidden sm:block">AY Code</h2>
        <IoIosArrowDropdown
          className="hidden sm:block"
          size={20}
          color="#030346"
        />
      </div>
    </header>
  );
};

export default StatMenu;
