import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";

const Admin = () => {
  return (
    <>
      <NavBar />
      <div>
        {/* sideBar Component */}
        <div>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Admin;
