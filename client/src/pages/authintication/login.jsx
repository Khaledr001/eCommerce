import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  // const navigate = useNavigate();
  const loginUrl = import.meta.env.VITE_USER_LOGIN;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const newFormData = { ...formData };
    newFormData[event.target.id] = event.target.value;
    setFormData(newFormData);
    console.log(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(loginUrl);
      console.log(formData);
      const response = await axios({
        method: "post",
        url: loginUrl,
        data: formData,
      });

      const data = response.data;
      console.log(data.payload);

      // navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col align-middle justify-center max-w-2xl m-auto bg-gray-100 rounded-2xl shadow-lg py-10 px-5">
        <div className=" p-5  w-full flex flex-col justify-center align-middle">
          <div className="m-auto w-[60%]">
            <h1 className="text-2xl font-bold m-auto text-[#1c2d5e]">Login</h1>

            <p className="mt-5 text-md m-auto text-blue-500">
              Are you already a member? Please Log-In
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="email"
                placeholder="Email"
                required
                id="email"
                value={formData.email}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="text"
                placeholder="Password"
                required
                id="password"
                value={formData.password}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="m-auto mt-8 w-[60%] bg-[#2064d8] hover:bg-orange-600 rounded-lg">
              <button
                type="submit"
                className="h-[40px] w-full text-white text-center cursor-pointer">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 w-full px-5">
          <div className="w-[60%] h-10 m-auto border-b border-[#002D74]">
            <Link className="text-[#2064d8] hover:text-orange-600 ">
              Forgote your password?
            </Link>
          </div>

          <div className="w-[60%] m-auto mt-5 flex justify-between items-center text-[#002D74] text-md">
            <div>
              <p>Don't have any account?</p>
            </div>
            <div>
              <Link
                to={"/register"}
                className="btn py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
