import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Profile from "./profile2.png";
export default function Header(props) {
  return (
    <div className="col-span-12 flex items-center justify-between">
      <div className="w-[80%]">
        <form className="flex items-center justify-between w-[40%] bg-slate-200 p-2 rounded-xl">
          <input className="outline-0 bg-transparent" placeholder="Search " />{" "}
          <AiOutlineSearch className="text-grey-400" />
        </form>
      </div>
      <div className="flex items-center  justify-end gap-4">
        <div className="flex flex-col">
          <p>MatthewJoshua@gmail.com</p>
          <span className="flex justify-end">Admin</span>
        </div>
        <div className="w-[15%]">
          <img className="w-[100%]" src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
