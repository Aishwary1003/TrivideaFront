import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Profile = ({ adminDetails, toggleRefresh }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (adminDetails) {
      setFormData({
        name: adminDetails.name || "",
        email: adminDetails.email || "",
        phone: adminDetails.phone || "",
      });
    }
  }, [adminDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.patch(
        "http://localhost:4000/api/v1/admin/details/update",
        formData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        console.log("Profile Updated SuccessFully");
        toast.success("Profile Updated SuccessFully");
        toggleRefresh();
      }
    } catch (err) {
      console.log(err);
      toast.error("Error while updating Profile");
    }

    console.log("Updated Profile Data:", formData);
    setIsEditing(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-yellow-dark mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-yellow-dark mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-dark rounded"
            required
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-yellow-dark mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-dark rounded"
            required
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-yellow-dark mb-1">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-dark rounded"
            required
            readOnly={!isEditing}
          />
        </div>
        {isEditing ? (
          <div className="flex gap-6">
            <button
              type="submit"
              className="bg-yellow-dark text-white py-2 px-4 rounded hover:cursor-pointer"
            >
              Update
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
              }}
              className="bg-yellow-dark text-white py-2 px-4 rounded  hover:cursor-pointer"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-yellow-dark text-white py-2 px-4 rounded  hover:cursor-pointer"
          >
            Edit
          </button>
        )}
      </form>
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

export default Profile;
