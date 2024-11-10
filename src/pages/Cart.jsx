import React, { useEffect, useState } from 'react';
import Heading from '../components/headingAndSubHeading/Heading';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Cart = ({ cart, setTaka, handleRemove }) => {
  const { product_title, product_image, description, price, product_id } = cart;

  

  return (
    <div className="w-[80%] mx-auto m-5 shadow-xl p-6">
      {/* banner */}
      <div className="flex justify-between">
        {/* main part */}
        <div className="flex items-center gap-4">
          {/* img */}
          <div className="w-[250px]">
            <img src={product_image} alt="" />
          </div>
          {/* headding */}
          <div>
            <Heading
              title={
                <>
                  <span className="text-black text-[30px]">
                    {product_title}
                  </span>
                </>
              }
              subtitle={
                <>
                  <span className="text-gray-500">{description}</span>
                </>
              }
            ></Heading>
            <div>
              <p className="text-[20px] text-left font-[600]">
                Price: $ {price}
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div>
          <button
            onClick={() => handleRemove(product_id)}
            className="btn btn-outline btn-error text-red-600"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;