import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../components/login/sign-in';
import SignUp from '../components/login/sign-up';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';
import MainPage from '../components/template/mainpage';

interface Transaction {
    description: string;
    price: string;
    type: string;
    category: string;
    date: string;
}

interface RouterProps {
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

const AppRouter: React.FC<RouterProps> = ({
    isLoggedIn,
    isModalOpen,
    isEditModalOpen,
    handleLogin,
    handleSave,
    handleToggleModal,
    handleCloseModal,
    handleToggleEditModal,
    handleCloseEditModal,
    handleToggleAddModal,
}) => {
    return (
        <Router>
            {isLoggedIn ? (
                <div>
                <MainPage
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
                </div>
            ) : (
                <Routes>
                    <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<SignIn onLogin={handleLogin} />} />
                </Routes>
            )}
        </Router>
    );
};

export default AppRouter;
