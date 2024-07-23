import React from 'react';
import { ModalHeaderStyled } from './molecules.styles';

interface ModalTitle {
    title: string;
  }

  const ModalHeader: React.FC<ModalTitle> = ({ title }) => {
    return (
        <ModalHeaderStyled>
            <h1>{title}</h1>
        </ModalHeaderStyled>
        )
}
export default ModalHeader;