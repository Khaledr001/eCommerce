import { Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import SingleBanner from "../../components/singleBanner";
import UserSidebar from "../../components/userProfile/UserSidebar";
import AccountSettings from "../../components/userProfile/AccountSettings";
import ChangePassword from "../../components/userProfile/ChangePassword";

const UserProfile = () => {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  console.log(userProfile.name);
  const { activepage } = useParams();

  return (
    <div>
      <Navbar reloadnavbar={false} />
      <SingleBanner
        heading="My Profile"
        bannerimage="/images/banner/banner1.webp"
      />

      <div className="flex flex-col lg:flex-row w-full justify-between mt-8 gap-5">
        {/* Right SideBar */}
        <div className="lg:w-[20%] w-full self-center border-2 border-solid rounded-md min-h-[20vh] lg:min-h-[50vh]">
          <UserSidebar activepage={activepage} />
        </div>

        {/* Main Content */}
        <div className="w-[100%] self-center lg:self-auto lg:w-[80%] border-2 border-solid rounded-md lg:min-h-[50vh] md:min-h-[50vh]">
          {/* {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "yourorders" && <YourOrders />}
          {activepage === "address" && <UserAddress />}
          {activepage === "legalnotice" && <LegalNotice />} */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
