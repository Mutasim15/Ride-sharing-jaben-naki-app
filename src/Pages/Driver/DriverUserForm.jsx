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
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">User Information</h2>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 rounded bg-white text-black"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />

      <input
        placeholder="Enter your username"
        className="w-full p-3 rounded bg-white text-black"
        value={data.userName}
        onChange={(e) => setData({ ...data, userName: e.target.value })}
        required
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-3 rounded bg-white text-black"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
      />

      {error && <div className="text-red-400 text-sm text-center">{error}</div>}

      <button
        type="submit"
        className="flex items-center justify-end ml-auto bg-[#7879F1] text-white px-6 py-2 rounded-full"
      >
        Next ➡️
      </button>
    </form>
  );
};

export default DriverUserForm;
