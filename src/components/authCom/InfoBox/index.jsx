import React from "react";

const InfoBox = () => {
  return (
    <article className="flex items-center w-full">
      <div className="bg-blue-200 rounded-xl h-[15rem] sm:w-64 w-[100%]">
        <h2 className="font-bold text-lg pl-3">Information</h2>
        <div className="flex gap-5 items-center justify-center">
          <ul className="font-bold">
            <li>Gender:</li>
            <li>Blood Type:</li>
            <li>Allergies:</li>
            <li>Diseases:</li>
            <li>Height:</li>
            <li>Weight:</li>
            <li>Patient Id:</li>
            <li>Last Visit:</li>
          </ul>
          <ul>
            <li>Male</li>
            <li>O Positive</li>
            <li>Carrots</li>
            <li>Diabetes</li>
            <li>Blood Disoreders</li>
            <li>1.78m</li>
            <li>2899FG9H</li>
            <li>Yesterday</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default InfoBox;
