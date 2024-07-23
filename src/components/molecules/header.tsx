import React from 'react';
import { HeaderStyled,HeaderContainer } from './molecules.styles';
import { BsPersonFillGear } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>Minhas Finanças</h1>
      </HeaderContainer>
      <HeaderContainer>
        <BsPersonFillGear/>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
