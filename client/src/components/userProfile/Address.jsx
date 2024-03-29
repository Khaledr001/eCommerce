import { useState } from "react";
import Axios from "../../axios";
import Cookies from "js-cookie";
import {useQuery} from 'react-query';
import Loading from "../Loading";

const Address = () => {
  const accessToken = Cookies.get("accessToken");
  const [addAddress, setAddAddress] = useState(false);
  const [addressData, setAddressData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddressData({
      ...addressData,
      [id]: value,
    });
    console.log(id, value);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this address?"
      );

      if (shouldDelete) {
        const { data } = await Axios({
          method: "delete",
          url: `/user/address/delete/${id}`,
          headers: {
            accessToken: accessToken,
          },
        });
        const address = data.payload;
        console.log(address);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios(
        {
          method: "post",
          url: "/user/address/add",
          data: addressData,
          headers: {
            accessToken: accessToken,
          },
        },
        { withCredentials: true }
      );
      const data = response.data;
      const address = data.payload;
      console.log(address);
      setAddAddress(!addAddress);
    } catch (err) {
      console.log(err);
    }
  };

  const getAddressesAxios = () => {
    return Axios(
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
  }

  const { isLoading, data, error } = useQuery("get-address", getAddressesAxios);

  if (isLoading) { 
    return <Loading />
  }
  if (error) {
    return <h2>{error.message}</h2>
  }

  const addresses = data?.data.payload.addresses;
  console.log(addresses);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="self-center ">
        <h1 className="text-3xl text-orange-500">
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
                  onClick={(e) => handleDelete(e, address._id)}
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
          <form className="w-full flex flex-col gap-5 justify-center items-center">
            <input
              // onSubmit={(e) => handleSubmit(e)}
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

            <button
              type="submit"
              onClick={(e) => {
                setAddAddress(!addAddress);
                handleSubmit(e);
              }}
              className="btn btn-outline btn-success m-5 mt-10">
              Save this address
            </button>
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
