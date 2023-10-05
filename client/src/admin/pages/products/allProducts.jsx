import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useGetAllProducts } from "../../../hooks/useProduct";
import ProductCard from "../../components/productCard";
import { useGetAllCatagory } from "../../../hooks/useCatagory";
import { useState } from "react";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProducts();
  console.log(data);
  const allProducts = data?.data.payload;

  const [catagory, setCatagory] = useState("Smart Phone");
  const catagories = useGetAllCatagory();
  const allCatagory = catagories?.data?.data.payload;

  if (isLoading) <Loading />;
  return (
    <>
      <div className="px-5 w-full h-20 bg-base-200 flex justify-between items-center rounded-md">
        <h1 className="text-4xl font-bold ">All Products Grid</h1>
      </div>

      <div className="flex justify-between items-center h-16 mt-5">
        <div className="w-full">
          <h1>{catagory}</h1>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-1 w-[30%] min-w-[150px]">
            <select
              onChange={(e) => setCatagory(e.target.value)}
              name="catagory"
              id="catagory"
              className="input input-info focus:outline-none text-lg">
              <select name="" id="">
                Select a Catagory
              </select>
              {allCatagory?.catagory.map((element) => {
                return (
                  <option key={element.slug} value={element.catagoryName}>
                    {element.catagoryName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {allProducts?.products.map((product) => {
          return (
            <div key={product.slug} className="w-[23%] mt-10">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
