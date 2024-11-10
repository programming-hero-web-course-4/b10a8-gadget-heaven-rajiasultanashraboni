import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { GiRoyalLove } from "react-icons/gi";
import { getAllCarts } from "../utils/cart";

const Navbar = () => {
  const { pathname } = useLocation();
  
  
  return (
    <>
      <div className="">
        {/* menu start */}
        <div
          className={`rounded-lg flex justify-between items-center p-6 ${
            pathname == "/" ||
            pathname == "/categories/All%20Category" ||
            pathname == "/categories/Smartphones" ||
            pathname == "/categories/Smartwatches" ||
            pathname == "categories/Laptops" ||
            pathname == "/categories/Tablets" ||
            pathname == "/categories/Smart%20Home%20Devices" ||
            pathname == "/categories/Drones"
              ? "bg-[#9538e2] text-white"
              : "bg-white text-black"
          }`}
        >
          {/* title */}
          <div>
            <Link to="/">
              <h1 className="font-700 text-[30px]">Sakib Gadget Haven</h1>
            </Link>
          </div>
          {/* routes state */}
          <div className="flex gap-2">
            <NavLink
              className={({ isActive }) =>
                `text-2xl ${isActive ? "text-yellow-400" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-2xl ${isActive ? "text-yellow-400" : ""}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-2xl ${isActive ? "text-yellow-400" : ""} ${
                  pathname == "/dashboard/wish" ? "text-yellow-400" : " "
                }`
              }
              to="/dashboard/cart"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-2xl ${isActive ? "text-yellow-400" : ""}`
              }
              to="/contact"
            >
              Contact us
            </NavLink>
          </div>
          {/* cards items */}
          <div className="flex gap-2">
            {/* cart list */}
            <Link to="/dashboard/cart">
              {/* div */}

              <div className="text-black z-0 bg-white p-3 rounded-full">
                <BsCartPlus />
              </div>
            </Link>
            {/* wish list */}
            <Link to="/dashboard/wish">
              <div className="text-black bg-white p-3 rounded-full">
                <GiRoyalLove />
              </div>
            </Link>
          </div>
        </div>
        {/* menu end */}
      </div>
    </>
  );
};

export default Navbar;
