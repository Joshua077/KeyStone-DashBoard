import React from "react";
import WeeklyIncomeChart from "./WeeklyIncomeChart";

export default function WeeklyIncome(props) {
  return (
    <div className="bg-white shadow-xl rounded-md p-5">
      <h1 className=" text-slate-400 text-xl">Weekly Income</h1>
      <div className="flex justify-between items-center mt-1">
        <div className="w-[30%]">
          <h1 className=" font-bold text-2xl">$5380</h1>
        </div>
        <div className="w-[70%]">
          <WeeklyIncomeChart />
        </div>
      </div>
    </div>
  );
}
