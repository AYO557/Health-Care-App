import React from "react";
import InputSpace from "../../components/unAuthCom/Input";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import Button from "../../components/unAuthCom/Button";
import BlueBox from "../../components/unAuthCom/BlueBox";

export default function SignUp() {
  return (
    <>
      <BlueBox
        text={"Sign Up"}
        styler={"sm:bottom-[28rem] md:bottom-[33rem] bottom-[34rem]"}
      />
      <Form method="post">
        <fieldset>
          <div className="flex">
            <InputSpace
              name={"firstName"}
              placeholder={"Firstname"}
              icon={<FaUser size={20} color="blue" />}
            />
            <InputSpace
              placeholder={"Lastname"}
              //   icon={<FaUser size={20} color="blue" />}
            />
          </div>
          <InputSpace
            name={"lastName"}
            placeholder={"Username"}
            icon={<FaUser size={20} color="blue" />}
          />
          <InputSpace
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            icon={<FaEnvelope size={20} color="blue" />}
          />
          <InputSpace
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            icon={<FaLock size={20} color="blue" />}
          />
          <InputSpace
            name={"confirmPassword"}
            placeholder={"Confirm Password"}
            type={"password"}
            icon={<FaLock size={20} color="blue" />}
          />
        </fieldset>
        <fieldset className="flex items-center justify-between px-1 py-3 text-blue-600 font-medium">
          <Button text={"Sign Up"} />
        </fieldset>
      </Form>
      <div className="text-center text-sm py-3">
        <p>
          Already have an account?{" "}
          <Link to="/auth" className="font-medium text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
