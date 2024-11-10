import React, { useEffect, useState } from 'react';
import { allClean, getAllCarts, removeLocal } from '../components/utils/cart';
import Cart from './Cart';
import Halmeet from '../components/Halmeet';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
const Carts = () => {
    const [data, setData] = useState([]);
    const [taka, setTaka] = useState(0);
    useEffect(()=>{
        const shownData = getAllCarts();
        setData(shownData);
        let sum = 0;
        for(let d of shownData){
          sum += d.price;
        }
        setTaka(sum.toFixed(2));
    },[data.length])

    const handleRemove = (id) => {
      removeLocal(id);
      const shownData = getAllCarts();
      setData(shownData);
      
    };
    const handleSorted = ()=>{
        const shownData = getAllCarts();
        // console.log(shownData)
        const sorted = [...shownData].sort((a,b)=> b.price - a.price);
        setData(sorted);

    }

    // disabble button
    const [dis, setDisabble] = useState(true);
    useEffect(()=>{
      if(data.length != 0) setDisabble(false);
      else setDisabble(true);
    },[data])
    // navigate
    const navigate = useNavigate();

    // modal

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
       const shownData = getAllCarts();
       setData(shownData);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }

    function closeModal() {
      setIsOpen(false);
      allClean();
       navigate('/');
    }
    // console.log(data)
    return (
      <>
        <div className="flex mt-4 items-center justify-between">
          <div>
            <h1 className="text-[24px] font-[700]">Cart</h1>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-[24px] font-[700]">Total cost $ {taka}</h1>
            </div>
            {/* button */}
            <div className="flex gap-3">
              <button
                disabled={dis}
                onClick={() => handleSorted()}
                className="btn btn-outline hover:bg-transparent btn-success"
              >
                Sort by Price
              </button>
              <button
                disabled={dis}
                onClick={openModal}
                className="btn btn-warning"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center flex-col mt-5 gap-4">
          {data.map((cart, i) => (
            <Cart
              key={i}
              cart={cart}
              setTaka={setTaka}
              handleRemove={handleRemove}
            ></Cart>
          ))}
        </div>
        <Halmeet title={`Cart || Sakib's Gadge Shops`}></Halmeet>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-[550px] h-[300px] rounded">
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-center">
                <div className="w-[50%]">
                  <img
                    className="w-full"
                    src="https://i.ibb.co.com/fpLDRDP/businesswoman-making-contactless-payment-through-mobile-phone-nfc-connection-nfc-communication-stand.jpg"
                    alt=""
                  />
                </div>
                <h2
                  className="text-[34px] font-[700]"
                  ref={(_subtitle) => (subtitle = _subtitle)}
                >
                  Payment Successfully
                </h2>

                <div>Total Amount: {taka}</div>
              </div>

              <div>
                <button className="btn btn-error" onClick={closeModal}>
                  close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
};

export default Carts;