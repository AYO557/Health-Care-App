import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="bg-green-600 px-10 py-3 font-semibold text-white rounded-md shadow-xl"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
