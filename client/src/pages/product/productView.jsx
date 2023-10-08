import { useLocation, useNavigate } from "react-router-dom";
import ErrorPage from "../errorPage";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";

const ProductView = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state.product;
  if (!product) {
    return <ErrorPage />;
  }
  const handlePlus = () => {
    if (count < product.quantity) setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleClick = () => {
      navigate("/checkout", {
          state: {
              data: [{ product: product }, { quantity: count }]
          }
      });
  };
  // console.log(product);
  const imagePath = `http://localhost:6001${product.image}`;
  return (
    <>
      <div className="m-[0_5%_auto] md:m-[0_10%_auto] pt-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="overflow-hidden md:min-w-[450px]">
            <img className="rounded-lg" src={imagePath} alt={product.name} />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-3xl font-bold text-info">{product.name}</p>
            </div>
            <div className="flex gap-1">
              <AiFillStar className="text-orange-500 text-xl" />
              <AiFillStar className="text-orange-500 text-xl" />
              <AiFillStar className="text-orange-500 text-xl" />
              <AiFillStar className="text-orange-500 text-xl" />
              <AiFillStar className=" text-xl" />
            </div>

            <div className="mt-4">
              <p className="text-xl font-semibold">Key Features</p>
              <p className="mt-2 text-base">{product.description}</p>
            </div>

            <div className="mt-12 flex gap-7 flex-col md:flex-row md:gap-20">
              <div className="flex gap-2 text-lg badge badge-lg badge-success h-8 py-5 w-52 font-semibold">
                <p>Price :</p>
                <p className="flex items-center">
                  {" "}
                  {product.price * count}{" "}
                  <TbCurrencyTaka className="text-2xl" />{" "}
                </p>
              </div>
              <div className="join">
                <div className="">
                  <button
                    onClick={handleMinus}
                    className="btn btn-outline join-item btn-info">
                    <AiOutlineMinus className="text-lg" />
                  </button>
                </div>
                <div>
                  <input
                    readOnly
                    className="w-20 focus:outline-none hover:cursor-default input input-bordered border border-info text-center text-lg join-item"
                    value={count}
                  />
                </div>
                <div className="">
                  <button
                    onClick={handlePlus}
                    className="btn btn-info btn-outline join-item">
                    <AiOutlinePlus className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-col md:flex-row gap-8 md:gap-16">
              <button className="btn w-44 btn-info rounded-md">
                {" "}
                Add to Cart
              </button>
              <button
                onClick={handleClick}
                className="btn w-44 btn-success rounded-md">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
