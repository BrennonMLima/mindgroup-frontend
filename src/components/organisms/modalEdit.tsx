import React, { useState } from 'react';
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";
import { ModalStyled, TransactionInput } from './organisms.syles';

interface Transaction {
  description: string;
  price: string;
  type: string;
  category: string;
  date: string;
}

interface ModalEditProps {
  onClose?: () => void;
  editedTransaction?: Transaction | null;
  onSave?: (transaction: Transaction) => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ editedTransaction, onClose, onSave }) => {
  const [editedDescription, setEditedDescription] = useState(editedTransaction ? editedTransaction.description : "");
  const [editedPrice, setEditedPrice] = useState(editedTransaction ? editedTransaction.price.toString() : "");
  const [editedType, setEditedType] = useState(editedTransaction ? editedTransaction.type || "" : "" );
  const [editedCategory, setEditedCategory] = useState(editedTransaction ? editedTransaction.category || "" : "");
  const [editedDate, setEditedDate] = useState(editedTransaction ? editedTransaction.date || "" : "");


  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDescription(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPrice(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedType(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCategory (e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = (e.target.value);
    setEditedDate(date);
  };


  const handleSave = async() => {

  };

  if (!editedTransaction) return null;

  return (
    <ModalStyled>
      <ModalHeader title="Edite a transação"/>
        <TransactionInput>
          <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={editedDescription} onChange={handleDescriptionChange}/>
          <ModalLabel title="Valor" type="text" placeholder="Valor" value={editedPrice} onChange={handlePriceChange}/>
          <ModalLabel title="Tipo" type="text" placeholder="Tipo" value={editedType} onChange={handleTypeChange}/>
          <ModalLabel title="Categoria" type="text" placeholder="" value={editedCategory} onChange={handleCategoryChange}/>
          <ModalLabel title="Data" type="date" placeholder="" value={editedDate} onChange={handleDateChange}/>
          <Button type="submit">Salvar</Button>
        </TransactionInput>
    </ModalStyled>
  );
};

export default ModalEdit;
