import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";

const Admin = () => {
  return (
    <>
      <NavBar />
      <div className="flex min-h-[690px]">
        {/* sideBar Component */}
        <div>
          <SideBar />
        </div>
        <div className="w-full p-5">
          <Outlet />
      </div>

      </div>
    </>
  );
};

export default Admin;
