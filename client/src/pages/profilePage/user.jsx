import { Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import SingleBanner from "../../components/singleBanner";
import UserSidebar from "../../components/userProfile/UserSidebar";
import AccountSettings from "../../components/userProfile/AccountSettings";

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

      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {/* {activepage === "accountsettings" && <AccountSettings />} */}
          {/* {activepage === "changepassword" && <ChangePassword />}
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
