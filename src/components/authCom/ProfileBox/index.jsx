import React from "react";
import catpfp from "../../../assets/Images/cat-pfp.jpeg";

const ProfileBox = () => {
  return (
    <article className="flex items-center w-full">
      <div className="bg-blue-200 rounded-xl flex justify-center items-center h-[15rem] sm:w-64 w-[100%]">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="h-24 w-24 rounded-full overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src={catpfp}
              alt="cat profile pic"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-bold text-xl">AY Code</h2>
            <p className="text-lg">
              <em>Age:</em> 30
            </p>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileBox;
