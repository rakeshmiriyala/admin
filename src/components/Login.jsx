import React from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/Buimage.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication logic (Replace with actual authentication)
    navigate("/dashboard/profile");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-900">
        <img
          src={loginImage}
          alt="Login Visual"
          className="object-cover w-full h-screen rounded-r-lg"
        />
      </div>
      
      {/* Right Side Login Form */}
      <div className="w-full md:w-1/2 flex flex-col bg-[#1A082F] justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">Login</h1>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-gray-800 text-white placeholder-gray-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-gray-800 text-white placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;