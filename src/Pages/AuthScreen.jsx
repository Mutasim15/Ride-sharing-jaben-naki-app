import React from "react";
import { useNavigate } from "react-router-dom";
import auth from '../assets/Auth.png'
const AuthScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex flex-col items-center justify-center px-4">
      {/* <div className="w-full max-w-sm"> */}
        <img
          src={auth}
          alt="Welcome"
          className="w-full max-h-60 object-contain mb-10"
        />
        {/* <div className="flex flex-col space-y-4"> */}
          <button
            onClick={() => navigate("/role-selection")}
            className="bg-[#474973] text-white text-base font-medium py-3 px-6 rounded-full w-full shadow-md max-w-xs mb-4 hover:bg-[#2b2b5f] "
          >
            Registration
          </button>
          <button
          onClick={()=>navigate("/login")}
           className="bg-white text-[#787777] text-base font-medium py-3 px-6 rounded-full w-full max-w-xs">
            Log In
          </button>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default AuthScreen;
