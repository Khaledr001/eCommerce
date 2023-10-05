import { HiOutlineViewGrid } from "react-icons/hi";
import { MdGroups2 } from "react-icons/md";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { TbShoppingCartCopy } from "react-icons/tb";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [parrow, setParrow] = useState(false);
  const [plist, setPlist] = useState(true);
  const [carrow, setCarrow] = useState(false);
  const [clist, setClist] = useState(true);
  const [uarrow, setUarrow] = useState(false);
  const [ulist, setUlist] = useState(true);
  const [oarrow, setOarrow] = useState(false);
  const [olist, setOlist] = useState(true);

  const handleProduct = () => {
    setParrow(!parrow);
    setPlist(!plist);
  };
  const handleCatagory = () => {
    setCarrow(!carrow);
    setClist(!clist);
  };
  const handleUser = () => {
    setUarrow(!uarrow);
    setUlist(!ulist);
  };
  const handleOrder = () => {
    setOarrow(!oarrow);
    setOlist(!olist);
  };

  return (
    <>
      <div id="sidebar" className="  w-[290px] bg-base-200 h-full pt-5 px-3">
        <div className="grid gap-4">
          <div className="flex justify-start items-center gap-2 text-lg btn">
            <HiOutlineViewGrid className="text-2xl" />
            <span>Dashboard</span>
          </div>

          <div>
            <div
              onClick={handleUser}
              className="flex justify-between items-center btn pe-5">
              <div className="flex justify-start items-center gap-2 text-lg">
                <MdGroups2 className="text-2xl" />
                <span>users</span>
              </div>
              {!uarrow ? (
                <MdKeyboardArrowRight className="text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-2xl" />
              )}
            </div>
            {!ulist && (
              <div className="grid ps-9 pt-1">
                <ul className="">
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>All users</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>update user</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>delete user</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={handleCatagory}
              className="flex justify-between items-center btn pe-5">
              <div className="flex justify-start items-center gap-2 text-lg">
                <TfiLayoutListThumb className="text-2xl" />
                <span>Catagory</span>
              </div>
              {!carrow ? (
                <MdKeyboardArrowRight className="text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-2xl" />
              )}
            </div>
            {!clist && (
              <div className="grid ps-9 pt-1">
                <ul className="">
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>All Catagory</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>Add catagory</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>delete catagory</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={handleProduct}
              className="flex justify-between items-center btn pe-5">
              <div className="flex justify-start items-center gap-2 text-lg">
                <LiaLuggageCartSolid className="text-2xl" />
                <span>products</span>
              </div>
              {!parrow ? (
                <MdKeyboardArrowRight className="text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-2xl" />
              )}
            </div>
            {!plist && (
              <div className="grid ps-9 pt-1">
                <ul className="">
                  <Link to={"/admin/all-products"} className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>All Products</span>
                  </Link>
                  <Link to={"/admin/add-product"} className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>Add product</span>
                  </Link>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>update Product</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>delete Product</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={handleOrder}
              className="flex justify-between items-center btn pe-5">
              <div className="flex justify-start items-center gap-2 text-lg">
                <TbShoppingCartCopy className="text-2xl" />
                <span>Orders</span>
              </div>
              {!oarrow ? (
                <MdKeyboardArrowRight className="text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-2xl" />
              )}
            </div>
            {!olist && (
              <div className="grid ps-9 pt-1">
                <ul className="">
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>All orders</span>
                  </li>
                  <li className="btn btn-sm w-full flex justify-start">
                    {" "}
                    <span>cancel order</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
