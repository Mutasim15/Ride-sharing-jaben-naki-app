import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaTruck, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import avatar from '../../../../assets/react.svg'

const PassengerHome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleNewTrip = () => {
    navigate("/new-trip");
  };

  return (
    <div className="min-h-screen bg-[#0F0E17] text-white px-12 pt-6 pb-24 font-poppins overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Hello, {username}</h2>
          <p className="text-sm text-gray-300">Where do you want to go</p>
        </div>
        <img
          src={avatar} // Make sure this image exists in your public folder
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Map Section */}
      <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
        <img
          src="/map-sample.png"
          alt="Map"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Trip Options Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={handleNewTrip}
          className="bg-white text-black rounded-xl py-4 flex flex-col items-center justify-center shadow-md active:scale-95"
        >
          <FaMapMarkerAlt size={24} />
          <span className="mt-2 text-sm font-medium">New Trip</span>
        </button>

        <div className="bg-[#f0d3b5] rounded-xl py-4 flex flex-col items-center justify-center text-black shadow-md">
          <FaMotorcycle size={24} />
          <span className="mt-1 text-sm font-semibold">Bike</span>
          <span className="text-xs text-gray-700">Get a smooth ride</span>
        </div>

        <div className="bg-[#4e4466] rounded-xl py-4 flex flex-col items-center justify-center text-white shadow-md">
          <FaTruck size={24} />
          <span className="mt-1 text-sm font-semibold">Delivery</span>
          <span className="text-xs text-gray-300">Hire trucks safe delivery</span>
        </div>

        <div className="bg-white text-black rounded-xl py-4 flex flex-col items-center justify-center shadow-md">
          <FaBuilding size={24} />
          <span className="mt-2 text-sm font-semibold">Ride for Office</span>
        </div>
      </div>

      {/* Ongoing Trip */}
      <div className="bg-[#2b2b2b] rounded-2xl p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/driver-icon.png"
            alt="Driver"
            className="w-10 h-10 rounded-full border border-white object-cover"
          />
          <div>
            <p className="font-semibold text-sm">POA123T</p>
            <p className="text-xs text-gray-400">Md X</p>
            <p className="text-xs">
              Pick up: <span className="text-green-400">Mohammadpur</span>
            </p>
            <p className="text-xs">
              Destination: <span className="text-green-400">Dhaka</span>
            </p>
          </div>
        </div>
        <button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full active:scale-95">
          Order again
        </button>
      </div>

      {/* View History */}
      <div className="text-right mt-4 text-sm text-green-400 underline cursor-pointer">
        View History
      </div>
    </div>
  );
};

export default PassengerHome;
