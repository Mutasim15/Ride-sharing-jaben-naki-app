import React from "react";
import { useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex items-center justify-center px-4">
      <div className="w-full max-w-sm py-10">
        <img
          src="/src/assets/auth-illustration.png"
          alt="Welcome"
          className="w-full max-h-60 object-contain mb-10"
        />
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/role-selection")}
            className="bg-[#7879F1] text-white py-3 rounded-full shadow-md"
          >
            Registration
          </button>
          <button className="bg-white text-[#A1A1A1] py-3 rounded-full shadow-md">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
