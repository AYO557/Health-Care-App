import React, { useState, useContext, useEffect } from "react";
import { SharedContext } from "../../SharedContext";
// import axios from "axios";

const AppAppointments = () => {
  const { sharedData } = useContext(SharedContext);
  const [data, setData] = useState({
    recommended_fruit: "",
    recommended_vegetable: "",
  });
  useEffect(() => {
    setData(sharedData);
  }, [data]);
  return (
    <div className="flex flex-col gap-4 p-4">
      <section className="bg-white shadow-lg rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">Health Status</h2>
        <p>Recent Symptoms: [Symptom Data]</p>
        <p>Health Score: [Score Data]</p>
      </section>
      <section className="bg-white shadow-lg rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">
          Recommended Fruits and Vegetables
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Fruit:{" "}
            {sharedData ? (
              <span>{sharedData.recommended_fruit}</span>
            ) : (
              <div>{null}</div>
            )}
          </li>
          <li>
            Vegetable:{" "}
            {sharedData ? (
              <span>{sharedData.recommended_vegetable}</span>
            ) : (
              <div>{null}</div>
            )}
          </li>
        </ul>
      </section>
      <section className="bg-white shadow-lg rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">Health Tips</h2>
        <ul className="list-disc pl-5">
          <li>It is best to have your dinner before 9 pm</li>
          <li>Lab Test - July 30, 2024</li>
        </ul>
      </section>
    </div>
  );
};

export default AppAppointments;
