import React from "react";
import background from "../assets/Images/hospital-background.jpg";
import { Outlet } from "react-router-dom";

const Unauthenticated = () => {
  const mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <main style={mainStyle} className="overflow-hidden">
      <article className="bg-white opacity-95 py-5 rounded-lg w-full max-w-md m-auto pt-20 px-5 relative sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%]">
        <Outlet />
      </article>
    </main>
  );
};

export default Unauthenticated;
