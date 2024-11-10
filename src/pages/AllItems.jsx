import React, { useEffect, useState } from "react";
import Heading from "../components/headingAndSubHeading/Heading";
import { useLoaderData, useParams } from "react-router-dom";
import Show from "./Show";
import Halmeet from "../components/Halmeet";
import { getAllWish } from "../components/utils/wish";

const AllItems = () => {
    const { product_id } = useParams();
    const { categories } = useLoaderData();
    const [shown, setSwhon] = useState([]);
    const[isLocal, setLocal] = useState(false);
    
    useEffect(() => {
      const shownData = [...categories].filter(
        (ctg) => ctg.product_id == product_id
      );
      const fev = getAllWish();
      const isExist = fev.find((item) => item.product_id == product_id);
      if (isExist) {
        setLocal(true);
      } else {
        setLocal(false);
      }
      setSwhon(shownData);
    }, [categories, product_id, setLocal]);

    
  return (
    <>
      <div>
        <div className="bg-[#9538e2] w-[100%] h-[300px] z-50">
          <Heading
            title={`Product Details`}
            subtitle={
              <>
                Explore the latest gadgets that will take your experience to{" "}
                <br></br>
                the next level. From smart devices to the coolest accessories,
                we have it all!
              </>
            }
          ></Heading>
        </div>

        <div className="bg-white shadow-md w-[70%] h-[650px] mx-auto z-0 relative -top-[150px]">
          {shown.map((show) => (
            <Show
              key={show.product_id}
              isLocal={isLocal}
              setLocal={setLocal}
              show={show}
            ></Show>
          ))}
        </div>
      </div>
      <Halmeet title={`Products || Sakib's Gadge Shops`}></Halmeet>
    </>
  );
};

export default AllItems;
