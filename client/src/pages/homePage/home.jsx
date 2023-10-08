import Carousel from "../../components/carousel";
import  ProductCardHome from "../../components/productCard";
import "./home.css";
import Loading from "../../components/Loading";
import { useGetAllProducts } from "../../hooks/useProduct";

function HomePage() {
  const { data, isLoading } = useGetAllProducts();
  const allProducts = data?.data.payload;
  // console.log(allProducts);
  if (isLoading) return <Loading />;

  return (
    <div>
      <Carousel />
      <div id="home" className="w-fit">
        <div className="mt-12 w-full flex flex-col justify-center items-center ">
          <h1 className="text-3xl">Featured Products</h1>
          <p className="text-lg mb-1">Check & Get Your Desired Product!</p>
        </div>
        <div className="mt-12 grid flex-1 items-start gap-[26px] mb-[30px] sm:grid-cols-2 md:grid-cols-3 md:mt-7 lg:grid-cols-4 2xl:grid-cols-5">
          {allProducts?.products.map((product) => {
            return (
              <div key={product.slug} className="transform transition duration-500 hover:scale-105">
                <ProductCardHome product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
