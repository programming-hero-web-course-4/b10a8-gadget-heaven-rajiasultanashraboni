import React from "react";
import ReactStars from "react-rating-stars-component";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import Heading from "../components/headingAndSubHeading/Heading";
import { addCarts, getAllCarts } from "../components/utils/cart";
import { addWish } from "../components/utils/wish";

const Show = ({ show, isLocal, setLocal }) => {
  const {
    product_id,
    stocks,
    rating,
    availability,
    specifications,
    description,
    price,
    category,
    product_image,
    product_title,
  } = show;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const handleCart = (cart) => {
    addCarts(cart);
  };
  // handle wish lists
  const handleWish = (wish) => {
    addWish(wish);
     setLocal(true);
  };
  return (
    <div>
      <section className="flex items-center gap-4">
        {/* imgsection */}
        <div className="w-[50%]">
          <img
            className="w-full h-[650px] object-cover"
            src={product_image}
            alt=""
          />
        </div>
        {/* details */}
        <div className="flex flex-col items-start">
          <Heading
            title={
              <>
                <span className="text-black">{product_title}</span>
              </>
            }
            subtitle={
              <>
                <span className="text-gray-900 text-[20px] font-[600] text-left">
                  Price: {price} $
                </span>
              </>
            }
          ></Heading>
          <button className="btn btn-outline btn-error">
            {availability ? `In Stock: ${stocks}` : "Out of Stock"}
          </button>
          <Heading
            subtitle={
              <>
                <span className="text-gray-700 font-extrabold">Category: {category}</span>
              </>
            }
          ></Heading>
          <Heading
            subtitle={
              <>
                <span className="text-gray-700">{description}</span>
              </>
            }
          ></Heading>
          <h1 className="text-xl font-bold mt-2">Specification</h1>
          <ul className="text-left list-decimal mx-3">
            {specifications.map((spc, i) => (
              <li key={i}>{spc}</li>
            ))}
          </ul>
          <h1 className="text-xl font-bold mt-2">Rating</h1>

          <div className=" flex items-center gap-2">
            <ReactStars
              count={5}
              size={24}
              value={rating}
              readOnly
              edit={false}
              activeColor="#ffd700"
            />
            <button className="btn">{rating}</button>
          </div>
          {/* button */}
          <div className="flex items-center gap-4 justify-center">
            <button
              disabled={!availability}
              onClick={() => handleCart(show)}
              className="btn mt-4 btn-success text-white"
            >
              Add to cart <FaCartArrowDown />
            </button>
            <button
              disabled={isLocal}
              onClick={() => handleWish(show)}
              className="btn rounded-full"
            >
              <GiSelfLove />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Show;
