import React from "react";

interface MainProps {
  text: string;
}

const Main: React.FC<MainProps> = ({ text }) => {
  return (
    <div className="main-wraper">
      <p>{text}</p>
    </div>
  );
};

export default Main;
