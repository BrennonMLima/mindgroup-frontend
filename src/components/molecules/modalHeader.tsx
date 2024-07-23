import React from 'react';
import { title } from 'process';
import { ModalHeaderStyled } from './molecules.styles';

interface ModalTile {
    title: string;
  }

  const ModalHeader: React.FC<ModalTile> = ({ title }) => {
    return (
        <ModalHeaderStyled>
            <h1>{title}</h1>
        </ModalHeaderStyled>
        )
}
export default ModalHeader;