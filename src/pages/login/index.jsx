import React from "react";
import InputSpace from "../../components/unAuthCom/Input";
import { FaLock, FaUser } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import BlueBox from "../../components/unAuthCom/BlueBox";

export default function Login() {
  return (
    <>
      <BlueBox
        text={"Log In"}
        styler={"sm:bottom-64 md:bottom-[22rem] bottom-[22rem]"}
      />
      <Form method="post">
        <fieldset>
          <InputSpace
            placeholder={"Username"}
            icon={<FaUser size={20} color="green" />}
          />
          <InputSpace
            placeholder={"Password"}
            type={"password"}
            icon={<FaLock size={20} color="green" />}
          />
          <div className="flex gap-2 items-center font-normal py-3">
            <input type="checkbox" name="keep-in" id="keep-in" />
            <label htmlFor="keep-in">Keep me logged in</label>
          </div>
        </fieldset>
        <fieldset className="flex items-center justify-between px-1 py-3 text-green-600 font-medium">
          <Link
            className="bg-green-600 px-10 py-3 font-semibold text-white rounded-md shadow-xl"
            to={"/"}
          >
            Log in
          </Link>
          <p>
            <Link to="forgotPassword">Forgot Password?</Link>
          </p>
        </fieldset>
      </Form>
      <div className="text-center text-sm py-3">
        <p>
          Don't have an account?{" "}
          <Link to="/auth/register" className="font-medium text-green-600">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}
