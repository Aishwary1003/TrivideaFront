import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "admin", // Default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://trivideaback.onrender.com/api/v1/signup",
        formData
      );
      console.log(response);
      if (response.status === 200) {
        alert("User registered Successfully");
        navigate("/");
      }
    } catch (err) {
      toast.error(`${err.response?.data?.message}`);
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-2/3 max-w-4xl p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-yellow-600 text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-yellow-600 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none text-yellow-800 placeholder-yellow-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-yellow-600 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none text-yellow-800 placeholder-yellow-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-yellow-600 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none text-yellow-800 placeholder-yellow-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-yellow-600 font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none text-yellow-800 placeholder-yellow-400"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block text-yellow-600 font-medium mb-1"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none text-yellow-800"
              required
            >
              <option value="admin">Admin</option>
              <option value="superadmin">Superadmin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-yellow-500">
            Already have an account?{" "}
            <a href="/" className="text-yellow-700 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default RegistrationForm;
