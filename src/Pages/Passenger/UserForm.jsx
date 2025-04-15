import React, { useState } from "react";

const UserForm = ({ data, setData, nextStep }) => {
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 space-y-4">
      <h2 className="text-white text-2xl font-poppins font-semibold mb-4">
        Enter User Name, Email and Password to Continue
      </h2>

      <input
        placeholder="Email"
        required
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.email}
        onChange={(e) =>
          setData({
            ...data,
            user: { ...data.user, email: e.target.value },
          })
        }
      />

      <input
        placeholder="Username"
        required
        className="w-[320px] px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal"
        value={data.userName}
        onChange={(e) =>
          setData({
            ...data,
            user: { ...data.user, userName: e.target.value },
          })
        }
      />

      {/* Password with Show/Hide logic */}
      <div className="relative w-[320px]">
        <input
          placeholder="Password"
          required
          type={showPassword ? "text" : "password"}
          className="w-full px-4 py-2 rounded-[30px] border border-solid border-[#FFFFFF] text-[#FFFFFF] font-inter font-normal pr-16"
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              user: { ...data.user, password: e.target.value },
            })
          }
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white"
        >
          {showPassword ? "Hide" : "👁️"}
        </button>
      </div>

      <button
        type="submit"
        className="flex justify-end ml-55 bg-gray-500 text-white px-6 py-2 rounded-full"
      >
        Next<span>➡️</span> 
      </button>
    </form>
  );
};

export default UserForm;
