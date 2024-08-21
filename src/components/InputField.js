import React from 'react';

function InputField({ label, type, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block text-left text-gray-700 font-bold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default InputField;
