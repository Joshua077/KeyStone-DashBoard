import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
export default function Layout(props) {
  return (
    <div className="grid grid-cols-12 auto-rows-[minmax(60px,auto)] ">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#dbeafe] rounded-tl-xl px-9 pb-8 pt-3">
        <Outlet />
      </div>
    </div>
  );
}
