import Carousel from "../../components/carousel";
import ECommerceCard from "../../components/productCard";
import Axios from "../../axios";
import "./home.css";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

function HomePage() {
  const getAllProducts = () => {
    return Axios({
      method: "GET",
      url: "/product/getall",
    });
  };

  const { data, isLoading } = useQuery("getAllProducts", getAllProducts);
  const allProducts = data?.data.payload;
  // console.log(allProducts);

  if (isLoading) return <Loading />;

  return (
    <div >
      <Carousel />
      <div id="home" className="mb-10" >
        <h1>All Products</h1>
        {allProducts?.products.map((product) => {
          return (
            <div key={product.slug} className="w-[23%] mt-10">
              <ECommerceCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
