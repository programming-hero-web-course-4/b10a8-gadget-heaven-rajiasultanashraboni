import React from 'react';
import Heading from '../headingAndSubHeading/Heading';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Catagories from '../Catagory/Catagories';
import Halmeet from '../Halmeet';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
      <>
        <div className="bg-[#9538e2] h-[500px] z-50 p-5">
          <Heading
            title={
              <>
                Upgrade Your Tech Accessorize with
                <br />
                Gadget Heaven Accessories
              </>
            }
            subtitle={
              <>
                Explore the latest gadgets that will take your experience to
                <br />
                the next level. From smart devices to the coolest accessories,
                we have it all!
              </>
            }
          ></Heading>
          {/* shop now button */}
          <div>
            <Link
              to="/dashboard/cart"
              className="btn rounded-3xl w-[150px] mt-3 text-[#9538e2]"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-[60%] mx-auto relative -top-[180px] rounded-lg -left-[350] z-0 border-[20px] border-[#B574EB]  ">
          <img
            className="w-full"
            src="https://i.ibb.co.com/DLBjjp5/banner.jpg"
            alt="Banner Image"
          />
        </div>

        {/* dynamic section start */}
        <section>
          {/* hedding */}
          <Heading
            title={
              <span className="text-black">Explore Cutting-Edge Gadgets</span>
            }
          ></Heading>
          {/* daynami sectin for data loading */}
          <div className="grid grid-cols-8 gap-3">
            <div className="col-span-2 rounded-md">
              <Catagories categories={data}></Catagories>
            </div>
            <div className="col-span-6">
              <Outlet></Outlet>
            </div>
          </div>
        </section>
        <Halmeet title={`Home || Sakib's Gadge Shops`}></Halmeet>
      </>
    );
};

export default Home;