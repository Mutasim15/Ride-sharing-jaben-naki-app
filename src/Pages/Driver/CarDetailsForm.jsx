// components/DriverRegistration/CarDetailsForm.jsx
import React from "react";

const CarDetailsForm = ({ data, setData, previousStep, handleSubmit }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Car Details</h2>
      <input
        placeholder="Enter car serial number"
        className="w-full p-3 rounded bg-white text-black"
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
        className="w-full p-3 rounded bg-white text-black"
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
        className="w-full p-3 rounded bg-white text-black"
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
        className="w-full p-3 rounded bg-white text-black"
        value={data.carDetails.carColor}
        onChange={(e) =>
          setData({
            ...data,
            carDetails: { ...data.carDetails, carColor: e.target.value }
          })
        }
      />
      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded-full"
        >
          Submit ✅
        </button>
      </div>
    </div>
  );
};

export default CarDetailsForm;
