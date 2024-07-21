import React, { useState } from "react";
// import { SharedContext } from "../../SharedContext";
import axios from "axios";
// import AppAppointments from "../appAppointment";

const FirstApproach = () => {
  //   const { setAppData } = useContext(SharedContext);
  const [formData, setFormData] = useState({
    disliked_foods: "",
    health_objectives: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const data = {
  //     Disliked_Foods: JSON.stringify(
  //       formData.disliked_foods.split(",").map((food) => food.trim())
  //     ),
  //     Health_Objectives: formData.health_objectives,
  //   };

  const handleSubmit = () => {
    // e.preventDefault();
    async function fetchRecommendations() {
      try {
        const response = await axios.post(
          "https://health-new.onrender.com/recommended",
          {
            Disliked_Foods: "['Asparagus', 'Broccoli']",
            Health_Objectives: "Weight Management",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recData = response.data;
        // setAppData(recData);
        console.log(recData);
      } catch (error) {
        console.error("Error fetching recommendations data", error);
      }
    }
    fetchRecommendations();
  };
  handleSubmit();
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-green-200 h-full p-4 rounded-lg w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="disliked_foods" className="font-bold mb-1">
              Disliked Foods (comma separated)
            </label>
            <input
              type="text"
              id="disliked_foods"
              name="disliked_foods"
              value={formData.disliked_foods}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="health_objectives" className="font-bold mb-1">
              Health Objectives
            </label>
            <input
              type="text"
              id="health_objectives"
              name="health_objectives"
              value={formData.health_objectives}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      <AppAppointments />
    </>
  );
};

export default FirstApproach;

const AppAppointments = () => {
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
          <li></li>
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
