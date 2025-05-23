import React, { useState } from "react";
import Swal from "sweetalert2";
import { baseUrl } from "../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

const CarDetailsForm = ({ data, setData, previousStep, resetStep }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { carSerialNo, category, carImg, carColor } = data.carDetails;
    const { email, userName, password } = data;
    const { name, dateOfBirth, contactNumber } = data.driver;

    if (!email || !userName || !password || !name || !dateOfBirth || !contactNumber || !carSerialNo || !category || !carImg || !carColor) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    setError("");

    const payload = {
      user: {
        email,
        userName,
        password
      },
      driver: data.driver,
      carDetails: data.carDetails
    };

    try {
      const response = await fetch(`${baseUrl}/user/create-driver`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log("API Raw Response:", result);
      if (!response.ok) {
        throw new Error(result?.message || "Something went wrong");
      }

      Swal.fire({
        icon: "success",
        title: "Driver Registered Successfully!",
        showConfirmButton: false,
        timer: 1500
      });

      console.log("✅ API Response:", result);

      // Reset form
      setData({
        email: "",
        userName: "",
        password: "",
        driver: {
          name: "",
          dateOfBirth: "",
          contactNumber: "",
          isActive: false,
          profileImg: ""
        },
        carDetails: {
          carSerialNo: "",
          category: "",
          carImg: "",
          carColor: ""
        }
      });
      resetStep(); // Go back to Step 1
      navigate('/login')

    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-white text-2xl font-poppins font-semibold mb-4">Car Details</h2>

      <input
        placeholder="Enter car serial number"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.carDetails.carSerialNo}
        onChange={(e) =>
          setData({
            ...data,
            carDetails: { ...data.carDetails, carSerialNo: e.target.value }
          })
        }
      />
      <input
        placeholder="Enter car category"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.carDetails.category}
        onChange={(e) =>
          setData({
            ...data,
            carDetails: { ...data.carDetails, category: e.target.value }
          })
        }
      />
      <input
        placeholder="Enter car image URL"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.carDetails.carImg}
        onChange={(e) =>
          setData({
            ...data,
            carDetails: { ...data.carDetails, carImg: e.target.value }
          })
        }
      />
      <input
        placeholder="Enter car color"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.carDetails.carColor}
        onChange={(e) =>
          setData({
            ...data,
            carDetails: { ...data.carDetails, carColor: e.target.value }
          })
        }
      />

      {loading && <div className="text-yellow-300 text-sm text-center">Submitting, please wait...</div>}
      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={previousStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full"
        >
          ⬅️ Previous
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Sign UP "}
        </button>
      </div>
    </form>
  );
};

export default CarDetailsForm;
