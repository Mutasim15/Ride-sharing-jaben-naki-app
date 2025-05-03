import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaTruck, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const PassengerHome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    // Fetch username from localStorage after login
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleNewTrip = () => {
    navigate("/new-trip");
  };

  return (
    <div className="min-h-screen bg-[#0F0E17] text-white px-4 pt-6 pb-20 font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Hello, {username}</h2>
          <p className="text-sm text-gray-300">Where do you want to go</p>
        </div>
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden mb-4">
        <img
          src="/map-sample.png"
          alt="Map"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Trip Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={handleNewTrip}
          className="bg-white text-black rounded-xl py-4 flex flex-col items-center justify-center"
        >
          <FaMapMarkerAlt size={24} />
          <span className="mt-2 text-sm font-medium">New Trip</span>
        </button>

        <div className="bg-[#f0d3b5] rounded-xl py-4 flex flex-col items-center justify-center text-black">
          <FaMotorcycle size={24} />
          <span className="mt-1 text-sm font-semibold">Bike</span>
          <span className="text-xs text-gray-700">Get a smooth ride</span>
        </div>

        <div className="bg-[#4e4466] rounded-xl py-4 flex flex-col items-center justify-center text-white">
          <FaTruck size={24} />
          <span className="mt-1 text-sm font-semibold">Delivery</span>
          <span className="text-xs text-gray-300">Hire trucks safe delivery</span>
        </div>

        <div className="bg-white text-black rounded-xl py-4 flex flex-col items-center justify-center">
          <FaBuilding size={24} />
          <span className="mt-2 text-sm font-semibold">Ride for Office</span>
        </div>
      </div>

      {/* Ongoing Trip */}
      <div className="bg-[#2b2b2b] rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/driver-icon.png"
            alt="Driver"
            className="w-10 h-10 rounded-full border border-white"
          />
          <div>
            <p className="font-semibold text-sm">POA123T</p>
            <p className="text-xs text-gray-400">Md Shahriar</p>
            <p className="text-xs">
              Pick up: <span className="text-green-400">Mohammadpur</span>
            </p>
            <p className="text-xs">
              Destination: <span className="text-green-400">Dhaka</span>
            </p>
          </div>
        </div>
        <button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          Order again
        </button>
      </div>

      {/* History Link */}
      <div className="text-right mt-2 text-sm text-green-400 underline cursor-pointer">
        View History
      </div>
    </div>
  );
};

export default PassengerHome;
