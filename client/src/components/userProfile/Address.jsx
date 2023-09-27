import { useEffect, useState } from "react";
import Axios from "../../axios";
import Cookies from "js-cookie";
import { TextField } from "@mui/material";

const Address = () => {
  const accessToken = Cookies.get("accessToken");
  const [addresses, setAddresses] = useState([{}]);
  const [addAddress, setAddAddress] = useState(false);
  const [addressData, setAddressData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddressData({
      ...addressData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios(
        {
          method: "post",
          url: "/user/address/add",
          headers: {
            accessToken: accessToken,
          },
        },
        { withCredentials: true }
      );
      const data = response.data;
      const address = data.payload;
      console.log(address);
    } catch (err) {
      console.log(err);
    }
  };

  const getAddress = async () => {
    try {
      const { data } = await Axios(
        {
          method: "get",
          url: "/user/address/all",
          headers: {
            accessToken: accessToken,
          },
        },
        {
          withCredentials: true,
        }
      );
      const address = data.payload.addresses;
      console.log(address);
      setAddresses(address);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);
  //   const addresses = ["a", "b", "c", "d", "e", "f"];

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="self-center ">
        <h1 className="text-3xl text-orange-400">
          {!addAddress ? "Your Address" : "Add New Address"}{" "}
        </h1>
      </div>
      {!addAddress && (
        <div className="flex flex-wrap w-full">
          {addresses.map((address) => {
            return (
              <div
                className="h-auto w-[45%] my-5 mx-2 p-3 border border-solid rounded-md flex flex-wrap relative min-h-[100px] gap-2"
                key={address._id}>
                <span>{address.district}</span>,
                <span>{address.subDistrict}</span>,
                {/* <span>{item.AddressLine3}</span> */}
                <button
                  key={address._id}
                  className="btn btn-circle btn-warning btn-outline absolute -right-2 -top-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {addAddress && (
        <div className="flex flex-col items-center w-full m-5 mt-10">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5 justify-center items-center">
            <input
              id="district"
              type="text"
              placeholder="District Name"
              required
              className="input input-bordered input-success w-full max-w-xs"
              onChange={handleChange}
            />
            <input
              id="subDistrict"
              type="text"
              placeholder="Sub-District Name"
              required
              className="input input-bordered input-success w-full max-w-xs"
              onChange={handleChange}
            />
            <input
              id="postCode"
              type="text"
              placeholder="Postal Code"
              aria-required
              className="input input-bordered input-success w-full max-w-xs"
              onChange={handleChange}
            />
            <textarea
              id="addressLine"
              className="textarea textarea-success"
              placeholder="Address Line"
              onChange={handleChange}></textarea>

            <div>
              <button
                type="submit"
                onClick={() => {
                  setAddAddress(!addAddress);
                }}
                className="btn btn-outline btn-success m-5 mt-10">
                Save this address
              </button>
            </div>
          </form>
        </div>
      )}

      {!addAddress && (
        <button
          onClick={() => {
            setAddAddress(!addAddress);
          }}
          className="btn btn-outline btn-success m-5">
          Add New Address
        </button>
      )}
    </div>
  );
};

export default Address;
