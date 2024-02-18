import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/select";
import Main from "../main";
import Modal from "../../components/Modal";

interface HeaderProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ inputValue: headerInputValue, setInputValue }) => {
  const [localInputValue, setLocalInputValue] = useState<string>('');
  const [selectedMethod, setSelectedMethod] = useState<string>('GET');
  const [buttonClickValue, setButtonClickValue] = useState<string>('');
  const [fetchedData, setFetchedData] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(e.target.value);
    setFetchedData(''); 
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      if (localInputValue.trim() !== '') {
        const response = await axios({
          method: selectedMethod,
          url: localInputValue,
        });
        const result = response.data;
        console.log(result);
        setFetchedData(JSON.stringify(result));
      }
    } catch (error) {
      console.error('Xatolik:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [localInputValue, selectedMethod]);

  const handleSelectChange = (selectedValue: string) => {
    setSelectedMethod(selectedValue);
    console.log('Selected value:', selectedValue);
  };

  return (
    <>
      <header>
        <div className="search-wrapper">
          <Select onValueChange={handleSelectChange} />
          <Input value={localInputValue} onChange={handleChange} />
        </div>
        <Button onClick={handleButtonClick} />
      </header>
      <Main text={fetchedData} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>Any additional content you want to display in the modal.</p>
      </Modal>
    </>
  );
};

export default Header;
