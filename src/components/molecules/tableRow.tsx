import React from 'react';
import Td from '../atoms/table/td';
import Tr from '../atoms/table/tr';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteTransaction } from '../../service/transactions';

interface Transaction {
  id: string;
  description: string;
  price: string;
  type: string;
  category: string;
  date: string;
}

interface TableRowProps {
  transaction: Transaction;
  onToggleEditModal: (transaction: Transaction) => void;
  onUpdate: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ transaction, onToggleEditModal, onUpdate }) => {
  const handleDeleteTransaction = async () => {
    await deleteTransaction(transaction.id);
    onUpdate();
  }

  const handleEditTransaction = () => {
    onToggleEditModal(transaction);
  }

  const formattedDate = new Date(transaction.date).toLocaleDateString('pt-BR');

  return (
    <Tr key={transaction.id}>
      <Td width="35%">{transaction.description}</Td>
      <Td width="15%" alignCenter={true}>{transaction.price}</Td>
      <Td width="15%" alignCenter={true}>{transaction.type}</Td>
      <Td width="15%" alignCenter={true}>{transaction.category}</Td>
      <Td width="15%" alignCenter={true}>{formattedDate}</Td>
      <Td width="12%" alignCenter={true}>
        <FaEdit className='action-icon' onClick={handleEditTransaction} />
        <FaRegTrashAlt className='action-icon' onClick={handleDeleteTransaction} />
      </Td>
    </Tr>
  );
};

export default TableRow;
