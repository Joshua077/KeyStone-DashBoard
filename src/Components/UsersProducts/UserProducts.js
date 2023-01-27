import React from "react";
import UserDetails from "./UserDetails";
export default function UserProducts(props) {
  return (
    <div className="col-span-8 rounded-md bg-white shadow-xl p-5">
      <div className="flex  justify-between">
        <div>
          <h1 className="text-gray-400 text-lg">Latest Added Products</h1>
        </div>
        <div>
          <p className="text-gray-400 text-lg">...</p>
        </div>
      </div>
      <UserDetails />
    </div>
  );
}
