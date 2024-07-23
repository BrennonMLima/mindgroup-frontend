import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../../service/transactions';
import TableHeader from '../molecules/tableHeader';
import TableRow from '../molecules/tableRow';
import { Table } from './organisms.syles';

interface Transaction {
  id: string;
  description: string;
  price: string;
  type: string;
  category: string;
  date: string;
}

interface TableGridProps {
  onToggleEditModal: (transaction: Transaction) => void;
  shouldUpdate: boolean;
  search: string;
}

const TableGrid: React.FC<TableGridProps> = ({ onToggleEditModal, shouldUpdate, search }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    try{
      const response = await getAllTransactions();
      setTransactions(response.data.transactions)
    }catch(err){
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  },[shouldUpdate]);

  const filteredTransactions = transactions.filter(transaction => 
    transaction.category.toLowerCase().includes(search.toLowerCase()) ||
    transaction.description.toLowerCase().includes(search.toLowerCase()) ||
    transaction.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Table>
      <TableHeader />
      {filteredTransactions.map((transaction) => (
        <TableRow
        key={transaction.id}
        transaction={transaction}
        onToggleEditModal={onToggleEditModal}
        onUpdate={fetchTransactions}
        />
      ))}
    </Table>
  );
};

export default TableGrid;
