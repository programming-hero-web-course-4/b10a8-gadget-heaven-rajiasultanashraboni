import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
    return (
      <div>
        <Toaster />
        {/* navBar */}
        <Navbar></Navbar>
        {/* daynamic */}
        <section className="min-h-[700px]">
          <Outlet></Outlet>
        </section>
        {/* footer */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;