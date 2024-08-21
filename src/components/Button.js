import React from 'react';

function Button({ type, disabled, className, children }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-2 px-4 rounded-md font-bold ${disabled ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-400'} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
