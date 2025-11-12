import React from "react";
import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#1A082F] text-white p-6 flex flex-col justify-between fixed h-full">
        <div>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul>
            <li className="mb-4 border-b border-gray-500 pb-2">
              <Link to="/dashboard/profile" className="block py-2 px-4 rounded hover:text-lg transition-all duration-200">
                Profile
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-500 pb-2">
              <Link to="/dashboard/payments" className="block py-2 px-4 rounded hover:text-lg transition-all duration-200">
                Payments
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-500 pb-2">
              <Link to="/dashboard/slotbooking" className="block py-2 px-4 rounded hover:text-lg transition-all duration-200">
                Slot Booking
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-500 pb-2">
              <Link to="/dashboard/support" className="block py-2 px-4 rounded hover:text-lg transition-all duration-200">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <button 
          onClick={handleSignOut} 
          className="w-32 py-2 px-4 bg-red-600 rounded hover:cursor-pointer hover:bg-red-700">
          Sign Out
        </button>
      </div>

      {/* Main Content (Right Side) */}
      <div className="w-3/4 ml-1/4 p-6">
        <Outlet /> {/* This will update dynamically based on the route */}
      </div>
    </div>
  );
};

export default Dashboard;
