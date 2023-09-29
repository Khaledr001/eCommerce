import Carousel from "../../components/carousel";
import ECommerceCard from "../../components/productCard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Axios from "../../axios";
import './home.css'

function HomePage() {
  const accessToken = Cookies.get("access_token");

  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      console.log(accessToken);
      const { data } = await Axios(
        {
          method: "GET",
          url: "/product/getall",
          headers: {
            accessToken: accessToken,
          },
        },
        { withCredentials: true }
      );
      const { products } = data.payload;
      // console.log(products);

      setAllProducts(products);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div id="home">
      <Carousel />
      <div className="mb-10">
        <h1>All Products</h1>
        {allProducts.map((product) => {
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
