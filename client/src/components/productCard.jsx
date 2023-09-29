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
      imgSrc="/images/products/apple-watch.png"
      // imgSrc={imgPath}
    >
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* <p>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</p> */}
          <p>{product.name}</p>
        </h5>
      </Link>
      <div className="mt-2.5 flex items-center">
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
        <span className="text-3xl flex justify-center items-center font-bold text-gray-900 dark:text-white">
          <span>
            <TbCurrencyTaka className="" />
          </span> 
          <span>{product.price}</span>
        </span>
        <Link
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          to="#">
          <p>Add to cart</p>
        </Link>
      </div>
    </Card>
  );
}
