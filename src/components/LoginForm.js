import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login",
        formData,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("User LoggedIn Successfully");

        const roleResponse = await axios.get(
          "http://localhost:4000/api/v1/role",
          {
            withCredentials: true,
          }
        );

        const userRole = roleResponse.data.role;
        if (userRole === "admin") {
          navigate("/admin-panel");
        } else if (userRole === "superadmin") {
          navigate("/superadmin-panel");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      toast.error(`${err.response?.data?.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-600 text-center mb-6">
          Admin / SuperAdmin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-yellow-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-yellow-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-yellow-500">
            Don’t have an account? <NavLink to={"/signup"}>SignUp</NavLink>
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

export default LoginForm;
