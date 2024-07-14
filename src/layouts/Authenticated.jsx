import React from "react";
import { Outlet } from "react-router-dom";
import NavBox from "../components/authCom/NavBox";

const Authenticated = () => {
  return (
    <div className="flex h-[100vh] bg-[#c0cff2] p-1 justify-center items-center text-[#030346]">
      <div className="h-full w-full rounded-lg flex flex-col-reverse sm:gap-1 sm:flex-row text">
        <NavBox />
        <main className="bg-[aliceblue] w-full h-full rounded-lg overflow-auto p-2 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Authenticated;
