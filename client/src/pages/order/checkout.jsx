import { useLocation } from "react-router-dom";
import ErrorPage from "../errorPage";
import { useFormik } from "formik";
import { useState } from "react";
import { useCreateOrder } from "../../hooks/useOrder";
import Loading from "../../components/Loading";

const Checkout = () => {
  const location = useLocation();
  const { data } = location.state;
  let user = localStorage.getItem("user");

  let total = 0;
  let delivery = 0;
  user = JSON.parse(user);
  //   console.log(user);
  const product = [];
  product[0] = data[0].product;
  const count = data[1].quantity;
  console.log(count);

  const { mutate, isLoading, isSuccess } = useCreateOrder();
  const [address, setAddress] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    // console.log(address);
  };
  const handleSubmit = () => {
    const formData = {
      quantity: count,
      address,
    };
    console.log(formData);
    mutate({ id: product[0]._id, orderDetails: formData });
  };

  if (!data || !user) {
    return <ErrorPage />;
  }

  if (isLoading) return <Loading />;
  if (isSuccess) {
    return <div className="h-[27vh] w-screen text-2xl text-center items-center mt-56 text-success">Order Confirmed successfully</div>;
  }
  return (
    <>
      <div className="m-[0_5%_auto] md:m-[0_10%_auto] pt-10">
        <div className="p-2">
          <h1 className="text-3xl font-semibold">Checkout</h1>
        </div>

        <div className="flex gap-5 w-full ">
          <div className="mt-2 bg-base-200 px-5 py-6 rounded-xl pb-9 md:min-w-[400px]">
            <h1 className="text-2xl font-semibold">Customer Information</h1>

            <div className="mt-5">
              <form className="flex flex-col gap-5" action="">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name *</label>
                  <input
                    readOnly
                    className="input border border-info focus:outline-none text-lg"
                    name="name"
                    type="text"
                    value={user.name}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email *</label>
                  <input
                    readOnly
                    className="input border border-info focus:outline-none text-lg"
                    name="email"
                    type="text"
                    value={user.email}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone">PhoneNumber *</label>
                  <input
                    readOnly
                    className="input border border-info focus:outline-none text-lg"
                    name="phone"
                    type="text"
                    value={user.phoneNumber}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Address *</label>
                  <textarea
                    rows="4"
                    onChange={handleChange}
                    className="textarea textarea-lg p-3 border border-info focus:outline-none text-lg"
                    name="address"
                    type="textarea"
                    value={address}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="px-3 py-7 w-full flex flex-col gap-10">
            <div className="">
              <h1 className="text-3xl font-semibold">Order Overview</h1>
              <div>
                <div className="overflow-x-auto">
                  <table className="table text-md">
                    {/* head */}
                    <thead className="text-lg font-semibold">
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((item, index) => {
                        console.log(item.name);
                        total += item.price * count;
                        delivery += item.shippingCost;
                        return (
                          <tr key={index} className="hover">
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{count}</td>
                            <td>{item.price}</td>
                            <td>{item.price * count}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td>sub-Total:</td>
                        <td className="text-error">{total}</td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td>Delivery Charge:</td>
                        <td className="text-error">{delivery}</td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td className="text-error">{total + delivery}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="self-end">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn w-48 btn-info text-base">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
