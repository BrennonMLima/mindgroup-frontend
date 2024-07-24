import React, { useState, useEffect } from 'react';
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";
import { ModalStyled, TransactionInput } from './organisms.styles';
import { updateTransaction } from '../../service/transactions';

interface Transaction {
  id: string;
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

const getAdjustedDate = (dateString: string) => {
  const date = new Date(dateString);
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offset);
  return date;
};

const getAdjustedDateForSaving = (dateString: string) => {
  const date = new Date(dateString);
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + offset);
  return date;
};

const ModalEdit: React.FC<ModalEditProps> = ({ editedTransaction, onClose, onSave }) => {
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedType, setEditedType] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedDate, setEditedDate] = useState("");

  useEffect(() => {
    if (editedTransaction) {
      setEditedDescription(editedTransaction.description);
      setEditedPrice(editedTransaction.price.toString());
      setEditedType(editedTransaction.type);
      setEditedCategory(editedTransaction.category);
      setEditedDate(getAdjustedDate(editedTransaction.date).toISOString().split('T')[0]);
    }
  }, [editedTransaction]);

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
    setEditedCategory(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDate(e.target.value);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedDescription || !editedPrice || !editedType || !editedCategory || !editedDate) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (!/^[\d.]+$/.test(editedPrice)) {
      alert('O preço deve conter apenas números e pontos.');
      return;
    }
    try {
      if (editedTransaction) {
        const adjustedDateForSaving = getAdjustedDateForSaving(editedDate);
        await updateTransaction(
          editedTransaction.id,
          editedDescription,
          editedPrice,
          editedType,
          adjustedDateForSaving,
          editedCategory
        );
        if (onSave) {
          onSave({
            id: editedTransaction.id,
            description: editedDescription,
            price: editedPrice,
            type: editedType,
            category: editedCategory,
            date: adjustedDateForSaving.toISOString()
          });
        }
        if (onClose) {
          onClose();
        }
      }
    } catch (error) {
      alert('Ocorreu um erro ao salvar a transação: ' + error);
    }
  };

  if (!editedTransaction) return null;

  return (
    <ModalStyled>
      <form onSubmit={handleSave}>
        <ModalHeader onClose={onClose} title="Edite a transação" />
        <TransactionInput>
          <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={editedDescription} onChange={handleDescriptionChange} />
          <ModalLabel title="Valor" type="text" placeholder="Valor" value={editedPrice} onChange={handlePriceChange} />
          <ModalLabel title="Tipo" type="radio" placeholder="Tipo" value={editedType} onChange={handleTypeChange} />
          <ModalLabel title="Categoria" type="text" placeholder="" value={editedCategory} onChange={handleCategoryChange} />
          <ModalLabel title="Data" type="date" placeholder="" value={editedDate} onChange={handleDateChange} />
          <Button type="submit">Salvar</Button>
        </TransactionInput>
      </form>
    </ModalStyled>
  );
};

export default ModalEdit;
