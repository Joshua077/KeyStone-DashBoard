import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import OverViewChart from "./OverViewChart";
export default function SalesOverview(props) {
  return (
    <div className="col-span-12 rounded-lg bg-white shadow-xl">
      <div className="flex items-center justify-between border-b-2 px-11 py-3">
        <div>
          <span className="text-sm font-bold"> Sales Overview</span>
        </div>
        <div>
          <button className="bg-blue-500 font-bold shadow-lg shadow-blue-200/150 px-12 py-2 text-sm rounded-md text-white">
            + Add Offer
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-11 py-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold mr-3 ">$80,630</span>
          <BsArrowUpCircleFill className="mr-3  text-green-500" />
          <span className="mr-3 text-green-500">+ 6.7%</span>
        </div>
        <div>
          <select className="border-2 px-3 py-1 rounded-md">
            <option> Year </option>
            <option> 2022</option>
            <option> 2022</option>
          </select>
        </div>
      </div>
      <OverViewChart />
    </div>
  );
}
