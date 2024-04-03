import React from "react";
import loginImg from "/images/logo.jpg";
import Navigation from "../../component/Home/Navigation";

export default function Login() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block relative overflow-hidden animate-slide">
          {/* Applying visual effects to the image */}
          <div className="relative w-full h-full">
            <img
              className="w-full h-full absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
              src={loginImg}
              alt="Login"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
            {/* Border and shadow */}
            <div className="absolute inset-0 border-4 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="bg-gray-100 sm:bg-gray-200 flex flex-col justify-center">
          <form className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-semibold text-center pb-4 text-gray-800">
              Login
            </h2>
            {/* Subtitle */}
            <p className="text-base text-center mb-6 text-gray-600 font-bold">
              Welcome to <span className="text-indigo-700">Academix</span>
            </p>

            {/* Email input */}
            <div className="flex flex-col pb-4">
              <label className="text-gray-800 font-semibold mb-2">Email</label>
              <input
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            {/* Password input */}
            <div className="flex flex-col pb-4">
              <label className="text-gray-800 font-semibold mb-2">
                Password
              </label>
              <input
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {/* Sign in button */}
            <button className="bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 w-full">
              Sign In
            </button>
            {/* Remember me checkbox and create account link */}
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
