import React from "react";
import catpfp from "../../../assets/Images/cat-pfp.jpeg";
import { Link } from "react-router-dom";

const ProfileBox = () => {
  return (
    <article className="flex items-center w-full">
      <div className="bg-green-200 rounded-xl flex justify-center items-center h-[15rem] sm:w-64 w-[100%]">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="h-24 w-24 rounded-full overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src={catpfp}
              alt="cat profile pic"
            />
          </div>
          <div>
            <p className="font-bold p-2">
              Welcome user, Your health is our priority, please visit our{" "}
              <Link className="underline" to={"/doctor"}>
                Doctor page
              </Link>{" "}
              to get started.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileBox;
