import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import car from '../assets/CarBook.png'
import { getToken } from '../utils/tokenUtils';
import { baseUrl } from '../utils/baseUrl';
const Home = () => {
  const navigate = useNavigate();
  const token = getToken()
  useEffect(()=>{
      const fetchUser =async ()=> {
        const res = await fetch(`${baseUrl}/user/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include' 
        });
        const role = (await res.json())
        console.log(role);
      }
    fetchUser()
  },[])

  return (
    <div className="min-h-screen bg-[#0F0F1D] flex items-center justify-center">
      <div className="w-full max-w-sm px-6 py-10">
        <img
          src={car}
          alt="Booking Illustration"
          className="w-full h-auto mb-8 object-contain"
        />

        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Book your car
        </h1>

        <p className="text-gray-300 text-sm text-center leading-relaxed mb-10">
        "Need a ride? Book your car in seconds with our appfast ,reliable, and ready to roll whenever you are!"
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
