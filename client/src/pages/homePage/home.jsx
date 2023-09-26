import Navbar from "../../components/navbar";
import Carousel from "../../components/carousel";
import { Outlet } from "react-router-dom";
// import { useAuth } from '../../hooks/useAuth'

function HomePage() {
  // const { accessToken } = useAuth();
  // console.log(accessToken);
  return (
    <>
      <Navbar />
      <Carousel />
      <Outlet>

      </Outlet>
    </>
  );
}

export default HomePage;
