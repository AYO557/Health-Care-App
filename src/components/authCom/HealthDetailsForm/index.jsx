import React, { useState, useContext } from "react";
import { SharedContext } from "../../../SharedContext";
import axios from "axios";

const HealthDetailsForm = () => {
  const { setSharedData } = useContext(SharedContext);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    health_condition: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const data = {
    age: formData.age,
    gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1),
    health_condition:
      formData.health_condition.charAt(0).toUpperCase() +
      formData.health_condition.slice(1),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchRecommendations() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/predict",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const recommendationsData = response.data;
        setSharedData(recommendationsData);
        console.log(recommendationsData);
        // setRecommendations(recommendationsData); // Assuming you have a state to store recommendations
      } catch (error) {
        console.error("Error fetching recommendations data", error);
      }
    }
    fetchRecommendations();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-200 h-full p-4 rounded-lg w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="font-bold mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="font-bold mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option selected disabled value="">
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="health_condition" className="font-bold mb-1">
            Health Condition
          </label>
          <input
            type="text"
            id="health_condition"
            name="health_condition"
            value={formData.health_condition}
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
  );
};

export default HealthDetailsForm;

// export const ApproachPage = ({data}) => {
//   // const [data, setData] = useState({
//   //   recommended_fruit: "",
//   //   recommended_vegetable: "",
//   // });
//   return (
//     <div className="flex flex-col gap-4 p-4">
//       <header className="bg-green-500 text-white p-4 rounded-md">
//         <h1 className="text-2xl font-bold">Reminder, Health is Wealth!</h1>
//         <p className="mt-2">Here's your health recommendations.</p>
//       </header>
//       <section className="bg-white shadow-lg rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-2">Health Status</h2>
//         <p>Recent Symptoms: [Symptom Data]</p>
//         <p>Health Score: [Score Data]</p>
//       </section>
//       <section className="bg-white shadow-lg rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-2">
//           Recommended Fruits and Vegetables
//         </h2>
//         <ul className="list-disc pl-5">
//           <li>Fruit: {data.recommended_fruit || null}</li>
//           <li>Vegetable: {data.recommended_vegetable || null}</li>
//         </ul>
//       </section>
//       <section className="bg-white shadow-lg rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-2">Health Tips</h2>
//         <ul className="list-disc pl-5">
//           <li>It is best to have your dinner before 9 pm</li>
//           <li>Lab Test - July 30, 2024</li>
//         </ul>
//       </section>
//     </div>
//   );
// };
