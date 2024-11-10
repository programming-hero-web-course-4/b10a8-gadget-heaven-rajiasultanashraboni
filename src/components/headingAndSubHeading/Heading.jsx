import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-white text-[56px] font-[700]">{title}</h1>
      <p className="text-gray-200 text-[16px] font-[400px]">{subtitle}</p>
    </>
  );
};

export default Heading;
