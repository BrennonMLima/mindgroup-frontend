import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/atoms/input/input';
import Button from '../../components/atoms/button/button';
import { SignContainer, FormStyles, PlaceHolder, InputContainer } from './sign.styles';
import { createUser } from '../../service/users';

const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        try{
            const {data, status} = await createUser(name, email, password)
            if (status === 201) {
                navigate('/login');
            }
        }catch(err){
            alert('Ocorreu um erro! tente novamente. '+err)
        }
    };

    return (
        <SignContainer>
            <h1>Cadastre-se</h1>
            <p>Olá, bem-vindo(a)!</p>
            <FormStyles onSubmit={handleSubmit}>
                <InputContainer>
                    <Input 
                        type="text" 
                        placeholder=" " 
                        onChange={handleNameChange} 
                        className={`text-input ${name ? 'filled' : ''}`} 
                    />
                    <PlaceHolder>Nome</PlaceHolder>
                </InputContainer>
                <InputContainer>
                    <Input 
                        type="text" 
                        placeholder=" " 
                        onChange={handleEmailChange} 
                        className={`text-input ${email ? 'filled' : ''}`}/>
                    <PlaceHolder>Email</PlaceHolder>
                </InputContainer>
                <InputContainer>
                    <Input 
                        type="password" 
                        placeholder=" " 
                        onChange={handlePasswordChange} 
                        className={`text-input ${password ? 'filled' : ''}`}/>
                    <PlaceHolder>Senha</PlaceHolder>
                </InputContainer>
                <Button type="submit" className='margin-top'>Cadastrar</Button>
                <p>Já tem uma conta? <Link to="/login" className='link'>Entre!</Link></p>
            </FormStyles>
        </SignContainer>
    );
};

export default SignUp;
