import React from 'react';
import Catagory from './Catagory';

const Catagories = ({categories}) => {
    return (
      <div>
        {categories.map((category, i) => (
          <Catagory key={i} category={category}></Catagory>
        ))}
      </div>
    );
};

export default Catagories;