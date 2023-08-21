import React from 'react';

const SelectOptions = ({ options, onChange }) => {
  console.log(options)
  return (
    <select
      className="text-black w-full p-2 rounded-md border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.code} value={option._id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;
