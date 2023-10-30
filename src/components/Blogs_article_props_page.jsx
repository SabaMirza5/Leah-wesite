import React from "react";
import { Link } from 'react-router-dom';
function Blogs_article_props_page(props) {
  return (
    <>
      <div className="flex py-5">
        <div>
          <img src={props.imgblog1} alt="" className="w-[250px]  h-[150px]" />
        </div>
        <div className="pl-[5%]">
          <h1 className="font-bold lg:text-lg md:text-base  text-sm font-serif">
            {props.titleblog}
          </h1>
          <p className=" font-serif  lg:text-base md:text-sm text-xs">
            {props.parablog}
          </p>
          <button className="text-white bg-primary rounded p-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary font-bold mt-3 w-32">
            <Link to="/discover-your-dream">Read More</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Blogs_article_props_page;
