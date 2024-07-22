import React from "react";

const BlueBox = ({ text, styler }) => {
  return (
    <div
      className={`bg-green-600 opacity-95 w-[90%] h-20 rounded-lg absolute ${styler} left-5 shadow-xl flex items-center justify-center font-bold text-white`}
    >
      {text}
    </div>
  );
};

export default BlueBox;
