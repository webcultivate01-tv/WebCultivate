import React from 'react'
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div>
      <Link to="/">
        <div className=" box bannerBox overflow-hidden rounded-[15px] group">
          <img
            src={props.img}
            alt="banner1"
            className="w-full group hover:scale-105 transition-all duration-500 "
          />
        </div>
      </Link>
    </div>
  );
};

export default BannerBox;
