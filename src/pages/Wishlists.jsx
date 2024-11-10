import React, { useEffect, useState } from 'react';
import Halmeet from '../components/Halmeet';
import { getAllWish, removeWish } from '../components/utils/wish';
import Wishh from './Wishh';
import { addCarts } from '../components/utils/cart';

const Wishlists = () => {
  const [data, setData] = useState([]);
  const handleCurtWish = (id)=>{
    addCarts(id);
    removeWish(id.product_id);
    const shownData = getAllWish();
    setData(shownData);
  }
  useEffect(() => {
    const shownData = getAllWish();
    setData(shownData);
  }, []);

  const handleRemove = (id)=> {
    removeWish(id);
    const shownData = getAllWish();
    setData(shownData);
  }
    return (
      <>
        <div className="flex mt-4 items-center justify-between">
          <div>
            <h1 className="text-[24px] font-[700]">Wish Lists</h1>
          </div>
        </div>
        <div>
          {data.map((list, i) => (
            <Wishh
              key={i}
              list={list}
              handleRemove= {handleRemove}
              handleCurtWish={handleCurtWish}
            ></Wishh>
          ))}
        </div>
        <Halmeet title={`Wishlist || Sakib's Gadge Shops`}></Halmeet>
      </>
    );
};

export default Wishlists;