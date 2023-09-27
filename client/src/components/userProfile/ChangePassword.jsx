import { useState } from "react";
import userServices from "../../services/userServices";

const ChangePassword = () => {
  const userObj = localStorage.getItem("user");
  const user = JSON.parse(userObj);
  const initialUserData = {
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    age: user.age,
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });
    //   console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    userServices.updateUser(userData, user._id);
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Change Password</h1>

      <div className="form-control ">
        <label className="cursor-pointer label">
          <span className="text-2xl me-5">Edit</span>
          <input
            type="checkbox"
            onClick={toggleEdit}
            className="toggle toggle-warning"
          />
        </label>
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="oldpass">
            Old Password <span>*</span>
          </label>
          <input type={showPassword ? "text" : "password"} />
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            New Password <span>*</span>
          </label>
          <input type={showPassword ? "text" : "password"} />
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            Confirm New Password <span>*</span>
          </label>
          <input type={showPassword ? "text" : "password"} />
        </div>
      </form>

      <div className="form-control">
        <label className="cursor-pointer label">
          <input
            type="checkbox"
            className="checkbox checkbox-error"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
          <span className="text-xl ms-3">Show Password</span>
        </label>
      </div>

      <button className="btn mt-5 bg-green-400">Save Changes</button>
    </div>
  );
};

export default ChangePassword;
