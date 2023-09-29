import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/homePage/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname == "/" && <HomePage />}

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
