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

      <Halmeet title={`Statistics || Shraboni's Gadget Shops`}></Halmeet>
    </>
  );
};

export default Statistics;
