import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  console.log('Input value:', value); 
  return <input type="text" placeholder="Enter URL paste text" value={value} onChange={onChange} />;
};

export default Input;