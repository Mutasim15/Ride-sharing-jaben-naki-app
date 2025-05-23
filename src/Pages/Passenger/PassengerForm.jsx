import React, { useState } from "react";
import Swal from "sweetalert2";
import { baseUrl } from "../../utils/baseUrl";
import { useNavigate } from "react-router-dom";



const PassengerForm = ({ data, setData, handleSubmit, handlePrevious }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { name, dateOfBirth, contactNumber } = data.passenger;

  const handlePassengerSubmit = async () => {
    if (!name || !dateOfBirth || !contactNumber) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all fields."
      });
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${baseUrl}/user/create-passenger`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration Complete",
          showConfirmButton: false,
          timer: 1500
        });
        
       
        handleSubmit();   //to reset form
        navigate('/login')
      } else {
        setError(result?.message || "Something went wrong!");
      }
    } catch (error) {
      setError(error.message || "Network error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-white text-2xl font-poppins font-semibold mb-4">Enter Full Name , Date of Birth and Contact Number</h2>

      {loading && <div className="text-yellow-300 text-sm text-center">Submitting, please wait...</div>}

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <input
        placeholder="Full Name"
        className="w-[310px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={name}
        onChange={e =>
          setData({
            ...data,
            passenger: { ...data.passenger, name: e.target.value }
          })
        }
      />
      <input
        type="date"
        className="w-[310px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={dateOfBirth}
        onChange={e =>
          setData({
            ...data,
            passenger: { ...data.passenger, dateOfBirth: e.target.value }
          })
        }
      />
      <input
        placeholder="Contact Number"
        className="w-[310px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={contactNumber}
        onChange={e =>
          setData({
            ...data,
            passenger: { ...data.passenger, contactNumber: e.target.value }
          })
        }
      />

      <div className="flex justify-between mt-4">
        <button onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-full">
        <span>⬅️</span>Previous
        </button>
        <button onClick={handlePassengerSubmit} className="bg-green-500 text-white px-4 py-2 rounded-full" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default PassengerForm;
