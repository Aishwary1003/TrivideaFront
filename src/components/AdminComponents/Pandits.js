import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Pandits = ({ pandits, toggleRefresh }) => {
  const [selectedPandit, setSelectedPandit] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">Pandits</h2>
      <table className="min-w-full bg-white border border-yellow-600">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-yellow-600">Name</th>
            <th className="py-2 px-4 border-b border-yellow-600">
              Specialization
            </th>
            <th className="py-2 px-4 border-b border-yellow-600">Experience</th>
            <th className="py-2 px-4 border-b border-yellow-600">Contact</th>
          </tr>
        </thead>
        <tbody>
          {pandits?.map((pandit, index) => (
            <tr key={index} className="hover:bg-yellow-100">
              <td className="py-2 px-4 border-b border-yellow-600">
                {pandit.name}
              </td>
              <td className="py-2 px-4 border-b border-yellow-600">
                {pandit.specialization}
              </td>
              <td className="py-2 px-4 border-b border-yellow-600">
                {pandit.experience}
              </td>
              <td className="py-2 px-4 border-b border-yellow-600">
                {pandit.contact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default Pandits;
