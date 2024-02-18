import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Send</button>;
};

export default Button;