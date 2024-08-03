import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AppointmentsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    health_condition: "",
    disliked_foods: "",
    health_objectives: "",
  });

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      Disliked_Foods: `['${formData.disliked_foods
        .split(",")
        .map((food) => food.trim())
        .join("','")}']`,
      Health_Objectives:
        formData.health_objectives.charAt(0).toUpperCase() +
        formData.health_objectives.slice(1),
    };

    try {
      const response = await axios.post(
        "https://health-new.onrender.com/recommended",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRecommendations(response.data.recommended_foods);
      toast.success("Recommendations fetched successfully!", {
        style: { fontWeight: "bold", color: "green" },
      });
    } catch (error) {
      console.error("Error fetching recommendations data", error);
      toast.error(
        "Sorry, we couldn't find a recommendation for you. Please try again",
        {
          style: {
            fontWeight: "bold",
            color: "red",
            backgroundColor: "yellowgreen",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-200 h-full p-4 rounded-lg w-full">
      <header className="bg-green-500 text-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">Reminder, Health is Wealth!</h1>
        <p className="mt-2">Here's your health recommendations.</p>
      </header>
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
              <option disabled value="">
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
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {recommendations.length > 0 && (
        <div className="mt-4 bg-white shadow-lg rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">Recommended Fruits</h2>
          <ul className="list-disc pl-5">
            {recommendations.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </div>
      )}
      <section className="mt-4 bg-white shadow-lg rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">Health Tips</h2>
        <ul className="list-disc pl-5">
          <li>It is best to have your dinner before 9 pm</li>
          <li>Blend together to make smoothie</li>
        </ul>
      </section>
    </div>
  );
};

export default AppointmentsForm;
