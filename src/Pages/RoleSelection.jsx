import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex flex-col items-center justify-center px-4">
      <img
        src="/src/assets/Auth.png"
        alt="Select Role"
        className="w-full max-w-xs mb-10"
      />
      <button
        onClick={() => navigate("/register/passenger")}
        className="bg-[#474973] text-white py-3 px-6 rounded-full w-full max-w-xs mb-4 hover:bg-[#2b2b5f]"
      >
        As a Passenger
      </button>
      <button
        onClick={() => navigate("/register/driver")}
        className="bg-white text-[#A1A1A1] py-3 px-6 rounded-full w-full max-w-xs"
      >
        As a Driver
      </button>
    </div>
  );
};

export default RoleSelection;
