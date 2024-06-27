import React from "react";
import InputSpace from "../../components/unAuthCom/Input";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlueBox from "../../components/unAuthCom/BlueBox";
import Button from "../../components/unAuthCom/Button";

export default function ForgotPassword() {
  return (
    <>
      <BlueBox
        text={"Forgot Password"}
        styler={"md:bottom-[14.5rem] bottom-[15rem]"}
      />
      <form className="">
        <fieldset>
          <InputSpace
            placeholder={"Email"}
            type={"email"}
            icon={<FaEnvelope size={20} color="blue" />}
          />
        </fieldset>
        <fieldset className="flex items-center justify-between px-1 py-3 text-blue-600 font-medium">
          <Button text={"Reset Password"} />
        </fieldset>
      </form>
      <div className="text-center text-sm py-3">
        <p>
          Remembered your password?{" "}
          <Link to="/auth" className="font-medium text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
