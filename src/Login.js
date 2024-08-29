import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from './features/auth/authSlice';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mt-2 mb-5 text-base">Please log in to continue</p>
        <LoginForm onLogin={handleLogin} />
        <p className="mt-5 text-gray-600 text-base">
          No account yet? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
