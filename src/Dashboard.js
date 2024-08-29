import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { email, password } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2 mb-5 text-base">Welcome to your dashboard!</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
      </div>
    </div>
  );
}

export default Dashboard;
