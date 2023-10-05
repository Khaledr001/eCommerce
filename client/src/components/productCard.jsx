/* eslint-disable react/prop-types */
"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
// import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

export default function ECommerceCard({ product }) {
  const imgPath = `http://localhost:6001${product.image}`;
  console.log(imgPath);
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      // imgSrc="/images/products/apple-watch.png"
      imgSrc={imgPath}
    >
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* <p>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</p> */}
          <p>{product.name}</p>
        </h5>
      </Link>
      <div className=" flex items-center">
        {/* <SeeSourceCodeForSVG />
        <SeeSourceCodeForSVG />
        <SeeSourceCodeForSVG />
        <SeeSourceCodeForSVG />
        <SeeSourceCodeForSVG /> */}
        <p className="text-black">Ratting -</p>
        <span className="ml-2 mr-2 rounded bg-cyan-100 px-2 py-0.5 text-sm font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p>5.0</p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl flex justify-center items-center font-bold text-gray-900 dark:text-white">
          <span>
            <TbCurrencyTaka className="" />
          </span> 
          <span>{product.price}</span>
        </span>
        <Link
          className="rounded-lg btn h-10 btn-sm btn-info"
          to="#">
          <p>Add to cart</p>
        </Link>
      </div>
    </Card>
  );
}
