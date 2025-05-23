import React from "react";
import { useNavigate } from "react-router-dom";
import role from '../assets/role.png'
const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex flex-col items-center justify-center px-4">
      <img
        src={role}
        alt="Select Role"
        className="w-full max-w-xs mb-10"
      />
      <button
        onClick={() => navigate("/register/passenger")}
        className="bg-[#474973] text-white text-base font-medium  py-3 px-6 rounded-full w-full max-w-xs mb-4 hover:bg-[#2b2b5f]"
      >
        As a Passenger
      </button>
      <button
        onClick={() => navigate("/register/driver")}
        className="bg-white text-[#908d8d] text-base font-medium py-3 px-6 rounded-full w-full max-w-xs"
      >
        As a Driver
      </button>
    </div>
  );
};

export default RoleSelection;
