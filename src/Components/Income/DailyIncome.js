import React from "react";
import DailyIncomeChart from "./DailyIncomeChart";

export default function DailyIncome(props) {
  return (
    <div className="bg-blue-500 shadow-xl rounded-md p-5 pb-0">
      <h1 className="text-white text-xl">Daily Income</h1>
      <div className="flex justify-between items-center mt-1">
        <div className="w-[30%]">
          <h1 className="text-white font-bold text-2xl">$345</h1>
        </div>
        <div className="w-[70%]">
          <DailyIncomeChart />
        </div>
      </div>
    </div>
  );
}
