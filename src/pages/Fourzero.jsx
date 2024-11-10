import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Halmeet from '../components/Halmeet';
import { useNavigate } from 'react-router-dom';

const Fourzero = () => {
  const navigate = useNavigate();
    return (
      <div>
        <img
          className="mx-auto"
          src="https://i.ibb.co.com/rGJ5gyp/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request.jpg"
          alt=""
        />
        <button
          onClick={() => navigate('/')}
          className="btn btn-outline btn-secondary"
        >
          GO Home
        </button>
        <Halmeet title={`404 || Sakib's Gadge Shops`}></Halmeet>
      </div>
    );
};

export default Fourzero;