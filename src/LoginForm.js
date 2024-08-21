import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import Button from './components/Button';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?[\];',./`~\\-]).{8,}$/;
    return re.test(password);
  };

  const handleInputChange = () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setEmailError(isValidEmail ? '' : 'Please enter a valid email address');
    setPasswordError(isValidPassword ? '' : 'Password must be a combination of at least 8 letters, numbers, and symbols');

    setIsValid(isValidEmail && isValidPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin(email, password);
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField 
        label="Email Address" 
        type="email" 
        value={email} 
        onChange={(e) => { setEmail(e.target.value); handleInputChange(); }}
        error={emailError}
      />
      <InputField 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
        error={passwordError}
      />
      <small className="text-gray-600 text-sm">It must be a combination of minimum 8 letters, numbers, and symbols.</small>
      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center text-gray-700 font-medium">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-blue-500 hover:underline text-sm">Forgot Password?</a>
      </div>
      <Button type="submit" disabled={!isValid} className="w-full">Log In</Button>
      <div className="my-4 text-gray-600 text-sm text-center">
        <span>Or log in with:</span>
      </div>
      <Button type="button" className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200">Microsoft 365</Button>
    </form>
  );
}

export default LoginForm;
