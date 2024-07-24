import React, { useState } from "react";
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";
import { createTransaction } from "../../service/transactions";
import { ModalStyled, TransactionInput } from "./organisms.styles";

interface ModalAddProps {
  onSave: (
    description: string,
    price: string,
    type: string,
    date: Date,
    category: string,
  ) => void;
  onClose?: () => void;
}

const getTodayDate = () => {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  today.setMinutes(today.getMinutes() - offset);
  return today;
};

const ModalAdd: React.FC<ModalAddProps> = ({ onSave, onClose }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date>(getTodayDate());

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !price || !type || !category || !date) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (!/^[\d.]+$/.test(price)) {
      alert('O preço deve conter apenas números e pontos.');
      return;
    }
    try {

      await createTransaction(description, price, type, date, category);
      onSave(description, price, type, date, category);
    } catch {
      alert('Algo deu errado!')
    }
    if (onClose) {
      onClose();
    }
  }

  return (
    <ModalStyled>
      <form onSubmit={handleSubmit}>
        <ModalHeader onClose={onClose} title="Adicione uma transação" />
        <TransactionInput>
          <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={description} onChange={handleDescriptionChange} />
          <ModalLabel title="Valor" type="text" placeholder="Valor" value={price} onChange={handlePriceChange} />
          <ModalLabel title="Tipo" type="radio" placeholder="Tipo" value={type} onChange={handleTypeChange} />
          <ModalLabel title="Categoria" type="text" placeholder="" value={category} onChange={handleCategoryChange} />
          <ModalLabel title="Data" type="date" placeholder="" value={date.toISOString().split('T')[0]} onChange={handleDateChange} />
          <Button type="submit">Salvar</Button>
        </TransactionInput>
      </form>
    </ModalStyled>
  );
};

export default ModalAdd;
