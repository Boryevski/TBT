import React from 'react';

const CustomSlider = ({ value, onChange, max }) => {
  return (
    <input
      type="range"
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
    />
  );
};

export default CustomSlider;