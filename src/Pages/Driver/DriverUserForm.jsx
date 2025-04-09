// components/DriverRegistration/DriverUserForm.jsx
import React from "react";

const DriverUserForm = ({ data, setData, nextStep }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">User Information</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 rounded bg-white text-black"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="Enter your username"
        className="w-full p-3 rounded bg-white text-black"
        value={data.userName}
        onChange={(e) => setData({ ...data, userName: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-3 rounded bg-white text-black"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        onClick={nextStep}
        className="flex items-center justify-end ml-auto bg-[#7879F1] text-white px-6 py-2 rounded-full"
      >
        Next ➡️
      </button>
    </div>
  );
};

export default DriverUserForm;