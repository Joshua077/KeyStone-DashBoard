import React ,{useState}from "react";
import { NavLink } from "react-router-dom";
import { SlGraph } from "react-icons/sl";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  BiCart,
  BiWalletAlt,
  BiBarChartAlt2,
  BiShoppingBag,
  BiFlag,
} from "react-icons/bi";
import { AiOutlineUsergroupAdd, AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SideLink(props) {

  const [navContact,setnavContact] = useState(false)
  return (
    <div>
      <div>
        <div 
        onClick={() => setnavContact(!navContact)}
        className="text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center">
        DashBoard <MdKeyboardArrowDown className="justify-self-end" />
        </div>
        {
          navContact && 
          <div>
  <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : "  text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <SlGraph /> DashBoard
        </NavLink>

<div className="mt-3">
<NavLink
  to="products"
  className={({ isActive }) =>
    isActive
      ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
      : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
  }
>
  <HiOutlineOfficeBuilding /> Products
</NavLink>
</div>

          </div>
        
        }
        
      </div>
     
      <div className="mt-3">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <BiCart /> Blog
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="transaction"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <BiWalletAlt /> Transaction
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center  gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <AiOutlineUsergroupAdd /> Users
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="analysis"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <BiBarChartAlt2 /> Analysis
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="reports"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex  items-center  gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <BiFlag /> Reports{" "}
          <MdKeyboardArrowDown className="justify-self-end" />
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="investment"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center  gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <BiShoppingBag /> Investment
        </NavLink>
      </div>
      <div className="mt-3">
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-200  flex items-center gap-2 py-2 pl-4 pr-8 rounded-r-xl rounded-bl-xl text-blue-700 font-medium"
              : " text-slate-400 font-mediumn flex gap-2 py-2 pl-4 pr-8 items-center"
          }
        >
          <AiOutlineSetting />
          Settings
        </NavLink>
      </div>
    </div>
  );
}
