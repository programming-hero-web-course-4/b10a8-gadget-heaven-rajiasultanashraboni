import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagory = ({category}) => {
    
    return (
      <div>
        <NavLink
          to={`/categories/${category.category}`}
          className={({ isActive }) =>
            `btn w-[50%] m-3 ${
              isActive
                ? "btn-success text-white"
                : "hover:bg-[#9538e2] hover:text-white"
            }`
          }
        >
          {category.category}
        </NavLink>
      </div>
    );
};

export default Catagory;