import { Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import SingleBanner from "../../components/singleBanner";
import UserSidebar from "../../components/userProfile/UserSidebar";

const UserProfile = () => {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  console.log(userProfile.name);
  const { activepage } = useParams();

  return (
    <div>
      <SingleBanner
        heading="My Profile"
        bannerimage="/images/banner/banner1.webp"
      />
      <div className="mx-[5%] lg:mx-[10%] mt-10">
        <div className="flex flex-col lg:flex-row w-full justify-between mt-8 gap-5">
          {/* Right SideBar */}
          <div className="lg:w-[20%] w-full border-2 border-solid rounded-md lg:min-h-[50vh] md:min-h-[50vh]">
            <UserSidebar />
          </div>

          {/* Main Content */}
          <div className="w-[100%] py-10 self-center lg:self-auto lg:w-[80%] border-2 border-solid rounded-md lg:min-h-[50vh] md:min-h-[50vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
