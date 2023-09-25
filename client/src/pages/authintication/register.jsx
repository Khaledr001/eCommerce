import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const regUrl = import.meta.env.VITE_USER_REGISTER;
  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    age: "",
    role: "customer",
  };

  const [formData, setFormData] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    let newFormData = { ...formData };
    newFormData[e.target.id] = e.target.value.trim();
    setFormData(newFormData);
    console.log(newFormData);
  }

  function handleConfirmPasswordChange(e) {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
  }

  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log(formData);
        const response = await axios({
          method: "post",
          url: regUrl,
          data: formData,
        });

        const data = response.data;
        console.log(data);

        navigate("/login", { replace: true });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Username is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.password.trim() === "") {
      errors.password = "Password is required";
    } else if (formData.password != confirmPassword.trim()) {
      errors.password = "Password does not match";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="flex flex-col align-middle justify-center max-w-2xl m-auto bg-gray-100 rounded-2xl shadow-lg py-10 px-5">
        <div className=" p-5  w-full flex flex-col justify-center align-middle">
          <div className="m-auto w-[60%] flex">
            <div className="">
              <h1 className="text-3xl font-bold m-auto text-[#1c2d5e]">
                User Registration
              </h1>
              <p className="mt-5 text-md m-auto text-blue-500">Welcome!!!</p>
            </div>

          </div>

          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="text"
                placeholder="Full Name"
                required
                onChange={(e) => handleChange(e)}
                id="name"
                value={formData.name}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => handleChange(e)}
                id="email"
                value={formData.email}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="text"
                placeholder="Phone Number"
                required
                onChange={(e) => handleChange(e)}
                id="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="text"
                placeholder="Password"
                required
                onChange={(e) => handleChange(e)}
                id="password"
                value={formData.password}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="text"
                placeholder="Confirm Password"
                required
                onChange={(e) => handleConfirmPasswordChange(e)}
                id="rPassword"
                value={confirmPassword}
              />
            </div>
            <div className="w-[60%] m-auto">
              <input
                className="h-[45px] w-full rounded-lg px-4 text-md border-none"
                type="number"
                placeholder="Age"
                onChange={(e) => handleChange(e)}
                id="age"
                value={formData.age}
              />
            </div>

            <div className="m-auto mt-5 w-[60%] bg-[#2064d8] hover:bg-orange-600 rounded-lg">
              <button
                className="h-[40px] w-full text-white text-center cursor-pointer"
                type="submit">
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 w-full px-5">
          <div className="w-[60%] m-auto flex justify-between items-center text-[#002D74] text-md">
            <div>
              <p>Already have an account?</p>
            </div>
            <div>
              <Link
                to={"/Login"}
                className="btn py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
