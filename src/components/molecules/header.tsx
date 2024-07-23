import React, { useEffect, useState } from 'react';
import { HeaderStyled, HeaderContainer } from './molecules.styles';
import { BsPersonFillGear } from "react-icons/bs";
import { getUserById } from '../../service/users';

interface User {
  name: string;
  email: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUserById();
        setUser(response.data.user);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    }

    fetchUser();
  }, []);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>Minhas Finanças</h1>
      </HeaderContainer>
      <HeaderContainer>
        <BsPersonFillGear />
        {user && <span>{user.email}</span>}
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
