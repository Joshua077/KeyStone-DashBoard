import React from "react";
import TopSaleChart from "./TopSaleChart";

export default function TopSales(props) {
  return (
    <div className="col-span-4 rounded-md auto-rows-[minmax(35px,auto)] bg-white shadow-xl pt-5 ">
      <TopSaleChart />
    </div>
  );
}
