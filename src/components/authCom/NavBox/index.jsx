import { FaArrowAltCircleDown, FaClock, FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const NavBox = () => {
  const { pathname } = useLocation();

  const sideButtons = [
    {
      icon: <IoHome size={30} />,
      title: "Home",
      path: "/",
      exact: true,
    },
    {
      icon: <FaUser size={30} />,
      title: "Doctor",
      path: "/doctor",
      exact: true,
    },
    {
      icon: <FaClock size={30} />,
      title: "Appointments",
      path: "/appointment",
      exact: true,
    },
    {
      icon: <FaArrowAltCircleDown size={30} />,
      title: "approach",
      path: "/approach",
      exact: true,
    },
  ];

  return (
    <>
      <nav className="sm:h-full h-[6vh] w-full sm:w-[5%] fixed sm:static rounded-lg bg-green-500 sm:flex sm:flex-col gap-5 sm:justify-center sm:items-center lg:max-h-[100vh] flex">
        <div className="flex flex-row sm:flex-col gap-5 md:gap-12 w-full justify-around items-center sm:items-center">
          {sideButtons.map(({ icon, title, path, exact }, index) => (
            <NavLink
              key={index}
              title={title}
              to={path}
              exact={exact}
              className={
                path === pathname
                  ? " lg:bg-green-800 text-green-200"
                  : "text-white"
              }
            >
              <span className="h-12 w-12 rounded-lg sm:rounded-full flex justify-center items-center hover:cursor-pointer">
                {icon}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBox;
