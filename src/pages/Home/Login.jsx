import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCredentials } from "../../Features/auth/authSlice";
import loginImg from "/images/logo.jpg";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://54.237.124.13:8000/user/login/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Staff Check", response?.data.is_staff);
      dispatch(setCredentials({ ...response?.data }));
      navigate("/Redirector");
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error("Error logging in:", error.response.data);

      // Handle login error, e.g., display error message to user
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block relative overflow-hidden animate-slide">
          <div className="relative w-full h-full">
            <img
              className="w-full h-full absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
              src={loginImg}
              alt="Login"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
            <div className="absolute inset-0 border-4 border-white shadow-lg"></div>
          </div>
        </div>

        <div className="bg-gray-100 sm:bg-gray-200 flex flex-col justify-center">
          <form
            className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-semibold text-center pb-4 text-gray-800">
              Login
            </h2>
            <p className="text-base text-center mb-6 text-gray-600 font-bold">
              Welcome to <span className="text-indigo-700">Academix</span>
            </p>

            <div className="flex flex-col pb-4">
              <label className="text-gray-800 font-semibold mb-2">
                Username
              </label>
              <input
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                type="text"
                name="username"
                placeholder="Enter your Username"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col pb-4">
              <label className="text-gray-800 font-semibold mb-2">
                Password
              </label>
              <input
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 w-full"
            >
              Sign In
            </button>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-gray-600">
                <input className="mr-2" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <p className="text-indigo-600 cursor-pointer transition-colors duration-300 hover:text-indigo-800">
                Create an account
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
