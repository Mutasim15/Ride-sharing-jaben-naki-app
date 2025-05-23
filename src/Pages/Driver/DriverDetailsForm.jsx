import React, { useState } from "react";

const DriverDetailsForm = ({ data, setData, nextStep, previousStep }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, dateOfBirth, contactNumber } = data.driver;

    if (!name || !dateOfBirth || !contactNumber) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-white text-2xl font-poppins font-semibold mb-4">Driver Details</h2>

      <input
        placeholder="Enter full name"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.driver.name}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, name: e.target.value } })
        }
        required
      />

      <input
        type="date"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.driver.dateOfBirth}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, dateOfBirth: e.target.value } })
        }
        required
      />

      <input
        placeholder="Enter contact number"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.driver.contactNumber}
        onChange={(e) =>
          setData({ ...data, driver: { ...data.driver, contactNumber: e.target.value } })
        }
        required
      />

      <input
        placeholder="Enter profile image URL"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
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

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-full"
        >
          ⬅️ Previous
        </button>
        <button
          type="submit"
          className="bg-gray-500 text-white px-6 py-2 rounded-full"
        >
          Next ➡️
        </button>
      </div>
    </form>
  );
};

export default DriverDetailsForm;
