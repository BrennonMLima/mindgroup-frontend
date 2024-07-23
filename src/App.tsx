import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import AppRouter from './router/router';
import { login } from './service/users';
import { getCookie, setCookie } from 'typescript-cookie';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(()=>{
    const token = getCookie("auth-token");
    if(token){
      setIsLoggedIn(true)
    }
}, [isLoggedIn])

  const handleLogin = async (email: string, password: string)=> {
    try{
      const {data: {token}, status} = await login(email, password);
      if(status === 200){
        setCookie("auth-token", token)
        setIsLoggedIn(true)
      }
    }catch{
      alert('Dados incorretos! Tente Novamente.')
    }
  }

  const handleSave = async (description: string, price: string, type: string, category: number, date: string)=> {
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleToggleEditModal = () => {
    setIsEditModalOpen((prevState) => !prevState);
  };
  const handleToggleAddModal = (isOpen: boolean) => {
    setIsEditModalOpen(false);
  setIsModalOpen(isOpen);
  };

  return (
    <div className="App">
      <AppRouter
        isLoggedIn={isLoggedIn}
        isModalOpen={isModalOpen}
        isEditModalOpen={isEditModalOpen} 
        handleLogin={handleLogin}
        handleSave={handleSave}
        handleToggleModal={handleToggleModal}
        handleCloseModal={handleCloseModal}
        handleToggleEditModal={handleToggleEditModal} 
        handleCloseEditModal={handleCloseEditModal} 
        handleToggleAddModal={handleToggleAddModal}
      />
      <GlobalStyles />
    </div>
  );
};

export default App;
