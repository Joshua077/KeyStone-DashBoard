import React from "react";
import DailyExpense from "./DailyExpense";
import DailyIncome from "./DailyIncome";
import WeeklyExpense from "./WeeklyExpense";
import WeeklyIncome from "./WeeklyIncome";

export default function IncomeHome(props) {
  return (
    <div className="col-span-12 grid  grid-cols-4 row-span-2 gap-x-10">
      <DailyIncome />
      <DailyExpense />
      <WeeklyIncome />
      <WeeklyExpense />
    </div>
  );
}
