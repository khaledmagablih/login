// src/Dashboard.js
import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2 mb-5 text-base">Welcome to your dashboard!</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
    </div>
  );
}

export default Dashboard;
