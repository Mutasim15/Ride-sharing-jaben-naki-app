// components/DriverRegistration/DriverDetailsForm.jsx
import React from "react";

const DriverDetailsForm = ({ data, setData, nextStep, previousStep }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Driver Details</h2>
      <input
        placeholder="Enter full name"
        className="w-full p-3 rounded bg-white text-black"
        value={data.driver.name}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, name: e.target.value } })
        }
      />
      <input
        type="date"
        className="w-full p-3 rounded bg-white text-black"
        value={data.driver.dateOfBirth}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, dateOfBirth: e.target.value } })
        }
      />
      <input
        placeholder="Enter contact number"
        className="w-full p-3 rounded bg-white text-black"
        value={data.driver.contactNumber}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, contactNumber: e.target.value } })
        }
      />
      <input
        placeholder="Enter profile image URL"
        className="w-full p-3 rounded bg-white text-black"
        value={data.driver.profileImg}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, profileImg: e.target.value } })
        }
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={data.driver.isActive}
          onChange={(e) =>
            setData({ ...data, driver: { ...data.driver, isActive: e.target.checked } })
          }
        />
        <label>Is Active</label>
      </div>
      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-[#7879F1] text-white px-6 py-2 rounded-full"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default DriverDetailsForm;