import React, { useState, ChangeEvent } from "react";

interface SelectProps {
  onValueChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('GET');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);
    onValueChange(selectedOption);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="PATCH">PATCH</option>
      <option value="DELETE">DELETE</option>
      <option value="HEAD">HEAD</option>
      <option value="OPTIONS">OPTIONS</option>
    </select>
  );
};

export default Select;
