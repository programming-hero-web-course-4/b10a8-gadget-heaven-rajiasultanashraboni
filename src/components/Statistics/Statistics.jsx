import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Heading from "../headingAndSubHeading/Heading";
import Halmeet from "../Halmeet";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";




const Statistics = () => {
  const load = useLoaderData();

  // const data = load.map((item) => ({
  //   name: item.product_title,
  //   uv: item.rating, // Example: scale rating for 'uv' dataKey
  //   pv: item.price, // Use price for 'pv' dataKey
  //   amt: item.price, // Example: derived value for 'amt' dataKey
  //   cnt: item.rating, // Use rating as is for 'cnt' dataKey
  // })); 
  
  return (
    <>
      <div className="bg-[#9538e2] w-full h-[350px]">
        <div className="pt-5 flex flex-col items-center justify-center">
          <Heading
            title={
              <>
                <span>Statistics</span>
              </>
            }
            subtitle={
              <>
                <span>
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the <br /> coolest
                  accessories, we have it all!
                </span>
              </>
            }
          ></Heading>
        </div>
      </div>

      
        {/* <ComposedChart
          width = {500}
          height = {400}
          data = {data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart> */}
      

      <Halmeet title={`Statitics || Sakib's Gadge Shops`}></Halmeet>
    </>
  );
};

export default Statistics;
