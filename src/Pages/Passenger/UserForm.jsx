import React from "react";

const UserForm = ({ data, setData, nextStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    nextStep(); // move to next step
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Enter User Name, Email and Password to Continue
      </h2>

      <input
        placeholder="Email"
        required
        className="w-full p-2 rounded bg-white"
        value={data.email}
        onChange={(e) => setData({
          ...data,
          user: { ...data.user, email: e.target.value }
        })}
      />
      <input
        placeholder="Username"
        required
        className="w-full p-2 rounded bg-white"
        value={data.userName}
        onChange={(e) => setData({ ...data, user: { ...data.user, userName: e.target.value } })}
      />
      <input
        placeholder="Password"
        required
        type="password"
        className="w-full p-2 rounded bg-white"
        value={data.password}
        onChange={(e) => setData({ ...data, user: { ...data.user, password: e.target.value } })}
      />

      <button
        type="submit"
        className="flex items-center gap-2 bg-[#7879F1] text-white px-4 py-2 rounded-full"
      >
        Next <span>➡️</span>
      </button>
    </form>
  );
};

export default UserForm;
