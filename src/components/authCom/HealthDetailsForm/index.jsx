import React, { useState } from "react";

const HealthDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    allergies: "",
    conditions: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-200 h-full p-4 rounded shadow w-full"
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
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="height" className="font-bold mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="weight" className="font-bold mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="allergies" className="font-bold mb-1">
            Allergies
          </label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="conditions" className="font-bold mb-1">
            Existing Conditions
          </label>
          <input
            type="text"
            id="conditions"
            name="conditions"
            value={formData.conditions}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default HealthDetailsForm;
