import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../utils/baseUrl";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = { email, password };

    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await res.json();

      console.log(result.success)

      if (result.success) {
        const token = result.payload.token;
        const role = result.payload.user.role;
        const user = JSON.stringify(result.payload.user)

        localStorage.setItem("token", token)
        localStorage.setItem("role", role);
        localStorage.setItem("user",user)

        // Set timeout to ensure Chrome completes SweetAlert rendering
        Swal.fire({
          icon: "success",
          title: "Successfully Logged In",
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          if (role === "passenger") {
            navigate("/passenger-dashboard");
          } else if (role === "driver") {
            navigate("/driver-dashboard");
          } else {
            navigate("/dashboard");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message || "Invalid credentials",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: err.message || "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2d2d2d] flex items-center justify-center">
      <div className="bg-[#3a3a3a] rounded-2xl p-8 max-w-md w-full shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl font-poppins font-semibold mb-4">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4" autoComplete="on">
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[320px] px-4 py-2 rounded-[30px] border border-white text-white bg-transparent font-inter font-normal"
          />

          <div className="relative w-[320px]">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-[30px] border border-white text-white bg-transparent font-inter font-normal pr-16"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm"
            >
              {showPassword ? "Hide" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-white text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/auth" className="text-green-400 underline hover:text-green-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
