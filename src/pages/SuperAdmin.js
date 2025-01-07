import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../components/SuperAdminComponents/Sidebar";
import Profile from "../components/SuperAdminComponents/Profile";
import Pandits from "../components/SuperAdminComponents/Pandits";
import { useState, useEffect } from "react";
import axios from "axios";

const SuperAdmin = () => {
  const [superDetails, setSuperDetails] = useState({});
  const [pandits, setPandits] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchDetails = async () => {
    try {
      const res = await axios.get(
        "https://trivideaback.onrender.com/api/v1/superadmin/details",
        {
          withCredentials: true,
        }
      );

      if (res?.data?.success == true) {
        setSuperDetails(res?.data?.data);

        // console.log(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
      console.log("Error while fetching SuperDetails");
    }
  };

  console.log(superDetails);

  const fetchPandits = async () => {
    try {
      const res = await axios.get("https://trivideaback.onrender.com/api/v1/pandits");
      if (res.status === 200) {
        console.log(res);
        setPandits(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
      console.log("Error while fetching Pandits");
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchPandits();
  }, [refresh]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-white">
        <Routes>
          <Route
            path="profile"
            element={
              <Profile
                superDetails={superDetails}
                toggleRefresh={() => {
                  setRefresh(!refresh);
                }}
              />
            }
          />
          <Route
            path="pandits"
            element={
              <Pandits
                pandits={pandits}
                toggleRefresh={() => {
                  setRefresh(!refresh);
                }}
              />
            }
          />
          <Route
            path="*"
            element={<Navigate to="/superadmin-panel/profile" replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SuperAdmin;
