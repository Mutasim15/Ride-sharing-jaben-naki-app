import React from 'react';

const AuthScreen = () => {
  return (
    <div className="min-h-screen bg-[#0F0F1D] flex items-center justify-center px-4">
      <div className="w-full max-w-sm py-10">
        {/* Image */}
        <img
          src="/src/assets/auth-illustration.png" 
          alt="Welcome Illustration"
          className="w-full max-h-60 object-contain mb-10"
        />

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="bg-[#7879F1] text-white text-base font-medium py-3 rounded-full w-full shadow-md hover:bg-[#6b6bdc] transition">
            Registration
          </button>

          <button className="bg-white text-[#A1A1A1] text-base font-medium py-3 rounded-full w-full shadow-md hover:bg-gray-100 transition">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
