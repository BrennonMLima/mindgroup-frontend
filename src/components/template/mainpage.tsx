import React, { useState } from 'react';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import SearchBoard from '../molecules/searchboard';
import ModalAdd from '../organisms/modalAdd';
import ModalEdit from '../organisms/modalEdit';
import TableGrid from '../organisms/TableGrid';
import { Main } from './template.styles';
import TransactionOverview from '../organisms/transactionOverview';

interface Transaction {
  description: string;
  price: string;
  type: string;
  category: string;
  id: string;
  date: string;
}

interface MainPageProps {
  isLoggedIn: boolean;
  isModalOpen: boolean;
  isEditModalOpen: boolean;
  handleLogin: (username: string, password: string) => void;
  handleSave: (name: string, descripton: string, value: string, amount: number, image: string) => void;
  handleToggleModal: () => void;
  handleCloseModal: () => void;
  handleToggleEditModal: (transaction?: Transaction) => void;
  handleCloseEditModal: () => void;
  handleToggleAddModal: (isOpen: boolean) => void;
}

const MainPage: React.FC<MainPageProps> = ({
  isModalOpen,
  isEditModalOpen,
  handleToggleModal,
  handleCloseModal,
  handleToggleEditModal,
  handleCloseEditModal,
}) => {
  const [editedTransaction, setEditedTransaction] = useState<Transaction | null>(null);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [search, setSearch] = useState('');
  const [userId, setuserId] = useState("b281126a-e359-4429-b3f8-5e74198f9f00");

  const toggleEditModal = (transaction?: Transaction) => {
    setEditedTransaction(transaction || null);
    handleCloseModal();
    handleToggleEditModal();
  };

  const updateTransactions = () => {
    setShouldUpdate(!shouldUpdate);
  };

  return (
    <div className="App">
      <Header />
      <Main>
            <TransactionOverview userId={userId} shouldUpdate={shouldUpdate} />
        <SearchBoard onToggleModal={handleToggleModal} search={search} setSearch={setSearch} />
        {isModalOpen && <ModalAdd onSave={updateTransactions} onClose={handleCloseModal} />}
        {isEditModalOpen && (
          <ModalEdit 
            onClose={handleCloseEditModal} 
            editedTransaction={editedTransaction} 
            onSave={updateTransactions} 
          />
        )}
        <TableGrid shouldUpdate={shouldUpdate} onToggleEditModal={toggleEditModal} search={search} />
      </Main>
      <Footer />
    </div>
  );
};

export default MainPage;
