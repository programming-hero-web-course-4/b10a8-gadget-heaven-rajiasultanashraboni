import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Ctg from "./Ctg";
import Heading from "../components/headingAndSubHeading/Heading";

const AllCtg = () => {
  const { categories } = useLoaderData();
  const [data, setData] = useState([]);
  // console.log(categories);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      if (category !== "All Category") {
        const sortData = [...categories].filter(
          (ctg) => ctg.category === category
        );
        setData(sortData);
      } else {
        setData(categories);
      }
    } else {
      setData(categories.slice(1, 10));
    }
  }, [categories, category]);

  
  if(data.length != 0){
    return (
      <>
        {
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
            {data.map((categry, i) => (
              <Ctg key={i} categry={categry}></Ctg>
            ))}
          </div>
        }
      </>
    );
  }else{
    return (
      <>
        <Heading
          title={
            <>
              <img className="mx-auto"
                src="https://i.ibb.co.com/Wz03Cfq/hand-drawn-no-data-concept-52683-127829.jpg"
                alt=""
              />
            </>
          }
        ></Heading>
      </>
    );
  }
  
};

export default AllCtg;
