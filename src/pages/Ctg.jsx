import React from 'react';
import { Link } from 'react-router-dom';

const Ctg = ({categry}) => {
    const { product_image, price, product_id, product_title} = categry;
    
    return (
      <div>
        <div className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img src={product_image} alt="Shoes" className="w-full h-[250px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p className="text-left">Price: $ {price}</p>
            <div className="card-actions justify-end">
              <Link
                to={`/All-items/${product_id}`}
                className="btn btn-outline btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Ctg;