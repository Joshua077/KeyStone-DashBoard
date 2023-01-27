import React from "react";

import WeeklyExpenseChart from "./WeeklyExpenseChart";

export default function WeeklyExpense(props) {
  return (
    <div className="bg-white shadow-xl rounded-md p-5 pb-0">
      <h1 className=" text-slate-400 text-xl">Weekly Expense</h1>
      <div className="flex justify-between items-center mt-1">
        <div className="w-[30%]">
          <h1 className=" font-bold text-2xl">$4320</h1>
        </div>
        <div className="w-[70%]">
          <WeeklyExpenseChart />
        </div>
      </div>
    </div>
  );
}
