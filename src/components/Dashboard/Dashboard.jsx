import React from "react";
import Heading from "../headingAndSubHeading/Heading";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Shraboni's Gadget Shops</title>
      </Helmet>

      <div className="bg-[#9538e2] w-full h-[350px]">
        <div className="pt-5 flex flex-col items-center justify-center">
          <Heading
            title={
              <>
                <span>Dashboard</span>
              </>
            }
            subtitle={
              <>
                <span>
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to <br /> the coolest
                  accessories, we have it all!
                </span>
              </>
            }
          ></Heading>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `text-xl ${
                isActive
                  ? "btn w-[100px]"
                  : "btn btn-outline border-white text-white w-[100px]"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wish"
            className={({ isActive }) =>
              `text-xl ${
                isActive
                  ? "btn w-[100px]"
                  : "btn btn-outline border-white text-white w-[100px]"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
