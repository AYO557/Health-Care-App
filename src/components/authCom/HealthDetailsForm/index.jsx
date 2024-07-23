import React, { useState, useContext } from "react";
import { SharedContext } from "../../../SharedContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HealthDetailsForm = () => {
  const navigate = useNavigate();
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
    console.log(formData);
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
        toast("Recommendations sent successfully!", {
          style: { fontWeight: "bold", color: "green" },
        });
        navigate("/appointment");
        console.log(recommendationsData);
      } catch (error) {
        console.error("Error fetching recommendations data", error);
        toast(
          "Sorry, we couldn't find a recommendation for you. Please try again",
          {
            style: {
              fontWeight: "bold",
              color: "red",
              backgroundColor: "yellowgreen",
            },
          }
        );
      }
    }
    fetchRecommendations();
  };

  return (
    <div className="bg-green-200 h-full p-4 rounded-lg w-full">
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
    </div>
  );
};

export default HealthDetailsForm;

const PopUp = () => {
  return (
    <div className="text-[#076907] p-3">
      <h2>
        Successful! Recommendations have been sent in the Recommendations page
      </h2>
    </div>
  );
};
