import React from "react";
import Header from "../Header.js/Header";
import IncomeHome from "../Income/IncomeHome";
import SalesOverview from "../SalesOverview/SalesOverview";
import TopSales from "../TopSales/TopSales";
import UserProducts from "../UsersProducts/UserProducts";

export default function DashBoard(props) {
  return (
    <div className="grid grid-cols-12 gap-9  auto-rows-[minmax(65px,auto)] ">
      <Header />
      <SalesOverview />
      <IncomeHome />
      <TopSales />
      <UserProducts />
    </div>
  );
}
