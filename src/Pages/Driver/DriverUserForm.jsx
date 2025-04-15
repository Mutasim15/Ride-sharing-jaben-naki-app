import React, { useState } from "react";

const DriverUserForm = ({ data, setData, nextStep }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, userName, password } = data;

    if (!email || !userName || !password) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <form className="p-5 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-white text-2xl font-poppins font-semibold mb-4">User Information</h2>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />

      <input
        placeholder="Enter your username"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.userName}
        onChange={(e) => setData({ ...data, userName: e.target.value })}
        required
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
      />

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <button
        type="submit"
        className="flex justify-end ml-53 bg-gray-500 text-white px-6 py-2 rounded-full"
      >
        Next ➡️
      </button>
    </form>
  );
};

export default DriverUserForm;
