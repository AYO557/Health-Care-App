import React from "react";
import StatMenu from "../../components/authCom/StatMenu";
import ProfileBox from "../../components/authCom/ProfileBox";
import InfoBox from "../../components/authCom/InfoBox";
import StatBox from "../../components/authCom/StatusBox";

const Home = () => {
  return (
    <>
      <StatMenu icon={"auth"} text={"Back to Login"} />
      <h2 className="font-bold text-3xl py-5">Current Appointment</h2>
      <div className="flex flex-col sm:flex-row gap-3 px-4 sm:h-[78vh]">
        <div className="w-full sm:w-[30%] sm:h-full flex flex-col gap-3">
          <ProfileBox />
          <InfoBox />
        </div>
        <StatBox />
      </div>
    </>
  );
};

export default Home;
