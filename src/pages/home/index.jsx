import React from "react";
import StatMenu from "../../components/authCom/StatMenu";
import ProfileBox from "../../components/authCom/ProfileBox";
import InfoBox from "../../components/authCom/InfoBox";
import SliderCom from "../../components/authCom/SliderCom";

const Home = () => {
  return (
    <>
      <StatMenu icon={"auth"} text={"Back to Login"} />
      <h2 className="font-bold text-green-950 text-3xl py-5">Daily Care App</h2>
      <div className="flex flex-col sm:flex-row gap-2 px-4 sm:h-[78vh] overflow-x-hidden w-full">
        <div className="w-full sm:w-[30%] sm:h-full flex flex-col gap-3 md:w-[24%] overflow-hidden">
          <ProfileBox />
          <InfoBox />
        </div>
        <div className="w-full sm:w-[76%] mx-auto rounded-md h-full">
          <SliderCom />
        </div>
      </div>
    </>
  );
};

export default Home;
