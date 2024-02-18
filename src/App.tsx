
import React, { useState } from "react";
import './App.css'
import Header from "./page/header";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div>
      <Header inputValue={inputValue} setInputValue={setInputValue} />
    </div>
    
  );
};

export default App;
