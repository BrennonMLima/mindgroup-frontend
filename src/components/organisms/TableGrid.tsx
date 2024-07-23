import React, { useEffect, useState } from 'react';
import TableHeader from '../molecules/tableHeader';
import TableRow from '../molecules/tableRow';
import { Table } from './organisms.syles';

interface Transaction {
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

  const filteredTransactions = transactions.filter(transaction => 
    transaction.category.toLowerCase().includes(search.toLowerCase()) ||
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Table>
      <TableHeader />
      {filteredTransactions.map((transactions) => (
        <TableRow

        />
      ))}
    </Table>
  );
};

export default TableGrid;
