import React from "react";
import { Users } from "./Data";
import image from "../../profile.png";
export default function UserDetails(props) {
  return (
    <div className="mt-8">
      {Users.map((User, index) => {
        return (
          <div className="mt-5 flex items-center justify-between" key={index}>
            <div className=" flex items-center justify-between w-[40%]">
              <div className="w-[25%]">
                <img className="w-[100%]" src={User.image} alt="Details" />
              </div>
              <div className="w-[70%]">
                <h1>{User.club}</h1>
                <span>{User.variant}</span>
              </div>
            </div>
            <div>
              <h1>{User.id}</h1>
            </div>
            <div>
              <h1>{User.wear}</h1>
            </div>
            <div>
              <h1>{User.date}</h1>
            </div>
            <div>
              <h1 className="text-green-500 bg-green-100 text-sm rounded-full p-2">
                {User.status}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
