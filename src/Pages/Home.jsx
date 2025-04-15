import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex items-center justify-center">
      <div className="w-full max-w-sm px-6 py-10">
        <img
          src="/src/assets/CarBook.png"
          alt="Booking Illustration"
          className="w-full h-auto mb-8 object-contain"
        />

        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Book your car
        </h1>

        <p className="text-gray-300 text-sm text-center leading-relaxed mb-10">
          Sell houses easily with the help of Listenoryx and to make this line big I am writing more.
        </p>

        <button
          onClick={() => navigate('/auth')}
          className="bg-[#474973] text-white text-base font-medium px-8 py-3 rounded-full w-full shadow-md hover:bg-[#2b2b5f] transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
