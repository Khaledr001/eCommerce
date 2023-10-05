import { useState } from "react";
import "./AccountSettings.css";
import userServices from "../../services/userServices";
import { Link } from "react-router-dom";

const AccountSettings = () => {
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

  const toggleEdit = () => {
    // if (isEditable) {
    //   handleSubmit();
    // }
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });
    // console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    userServices.updateUser(userData, user._id);
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>

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

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input
            className="text-black"
            type="text"
            name="name"
            id="name"
            readOnly={!isEditable}
            value={userData.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone/Mobile <span>*</span>
          </label>
          <input
            className="text-black"
            type="number"
            name="phone"
            id="phoneNumber"
            readOnly={!isEditable}
            value={userData.phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            className="text-black"
            type="email"
            name="email"
            id="email"
            readOnly={!isEditable}
            value={userData.email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group relative">
          <label htmlFor="email">
            Your Age <span>*</span>
          </label>
          <input
            className="text-black"
            type="number"
            name="age"
            id="age"
            readOnly={!isEditable}
            value={userData.age}
            onChange={(e) => handleInputChange(e)}
          />
          <span className="absolute right-4 top-[55%]"></span>
        </div>

        {isEditable ? (
          <Link className="btn my-8 mx-3 " type="submit">
            SAVE CHANGES
          </Link>
        ) : null}
      </form>
    </div>
  );
};

export default AccountSettings;
