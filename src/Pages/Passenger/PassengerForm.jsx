import React, { useState } from "react";
import Swal from "sweetalert2";


const PassengerForm = ({ data, setData, handleSubmit, handlePrevious }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const response = await fetch("https://jaben-naki-server.vercel.app/api/v1/user/create-passenger", {
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
        handleSubmit();
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
      <h2 className="text-white text-2xl font-semibold mb-4">Enter Full Name, Date of Birth and Contact Number</h2>

      {loading && <div className="text-yellow-300 text-sm text-center">Submitting, please wait...</div>}

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <input
        placeholder="Full Name"
        className="w-full p-2 rounded bg-white"
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
        className="w-full p-2 rounded bg-white"
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
        className="w-full p-2 rounded bg-white"
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
          ← Previous
        </button>
        <button onClick={handlePassengerSubmit} className="bg-green-500 text-white px-4 py-2 rounded-full" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default PassengerForm;
