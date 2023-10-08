/* eslint-disable react/prop-types */
"use client";
import { TbShoppingCartCopy } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCardHome = ({ product }) => {
  const imgPath = `http://localhost:6001${product.image}`;
  console.log(imgPath);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product-view", { state: { product: product } });
  };

  return (
    <div
      className=" flex flex-col h-full rounded-lg bg-base-200 p-4"
      style={{
        opacity: "1",
        transform: "translateY(0px)",
        transition: "box-shadow var(--transition)",
      }}>
      <div className="flex items-start gap-[14px] mb-2.5">
        <div className="overflow-hidden rounded-lg bg-white border-solid border border-[#354585] flex flex-1 items-center justify-center">
          <img src={imgPath} alt="Product Image" />
        </div>
      </div>
      <a
        onClick={handleClick}
        className="text-lg !leading-[1.4] block max-w-[180px] transition hover:text-[#4F89FC] ">
        {product.name}
      </a>
      <div className="flex flex-col flex-1 gap-2.5 mt-2.5">
        <p className=" font-bold text-md leading-[1.4] text-green-400">
          Available : {product.quantity}
        </p>
        <p className=" font-bold text-md leading-[1.4] text-[#4F89FC]">
          Ratting : <span className="badge badge-success ms-2">5.0</span>
        </p>
        <div className="flex items-center">
          <p className=" font-bold text-md leading-[1.4]">
            Price : {product.price}
          </p>
          <TbCurrencyTaka className="text-lg" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div
          onClick={handleClick}
          className="btn btn-sm btn-info btn-outline rounded-3xl">
          <span>View</span>
        </div>
        <div className="tooltip tooltip-top" data-tip="Add to cart">
          {" "}
          <button className="btn min-w-[50px] btn-sm btn-success btn-outline rounded-2xl">
            <TbShoppingCartCopy className="text-xl" />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCardHome;
