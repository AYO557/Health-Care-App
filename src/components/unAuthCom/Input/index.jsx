import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const InputSpace = ({ icon, type = "text", placeholder, name }) => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handlePasswordIcon = (e) => {
    if (type === "password" && e.target.value) {
      setPasswordIcon(true);
    } else if (!e.target.value && type === "password") {
      setPasswordIcon(false);
      setInputType("password");
    }
  };

  const togglePasswordIcon = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="p-3">
      <div className="border-b-2 py-3 flex items-center gap-2">
        {icon}
        <input
          className="h-5 w-full outline-none"
          type={inputType}
          name={name}
          id=""
          aria-label={placeholder}
          placeholder={placeholder}
          onChange={handlePasswordIcon}
        />
        {passwordIcon && (
          <span onClick={togglePasswordIcon} className="cursor-pointer">
            {inputType === "password" ? (
              <FaEyeSlash size={25} color="blue" />
            ) : (
              <IoEyeSharp size={25} color="blue" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputSpace;
