import React from "react";
import SideLink from "./SideLink";
export default function SideBar(props) {
  return (
    <div className="px-8">
      <h1 className="text-blue-700 font-extrabold text-5xl mt-5">RETRO</h1>
      <nav className="mt-[74px]">
        <SideLink />
      </nav>
    </div>
  );
}
