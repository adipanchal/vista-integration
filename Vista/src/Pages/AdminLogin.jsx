import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/MainLogo.png";


function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUsername = "admin";
    const adminPassword = "adminhu";

    if (username === adminUsername && password === adminPassword) {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login w-full h-screen flex justify-center items-center bg-black">
      <div className="login-con p-6 rounded shadow-md w-96 max-sm:w-80">
      <div className="flex justify-center mb-5">
          <img src={logo} className="w-24" alt="Logo" />
        </div>
        <h2 className="text-2xl mb-10 text-primary italic text-center">#Admin Hai Aap!</h2>
        <form onSubmit={handleLogin} className="w-full bg-slate-800 p-5 rounded-2xl">
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="py-4 w-full border-gray-300 text-white bg-transparent border-b text-sm uppercase focus:border-primary focus:outline-0"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="py-4 w-full border-gray-300 text-white bg-transparent border-b text-sm uppercase focus:border-primary focus:outline-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-0 mt-4 mr-4 text-slate-500 hover:text-primary"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="mt-10 justify-center flex">
            <button
              type="submit"
              className="contact-button w-full pl-6 pr-2 py-2 rounded-full text-white"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mil-arrow"
              >
                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
