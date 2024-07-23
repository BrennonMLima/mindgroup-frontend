import React from 'react';
import { ModalHeaderStyled } from '../molecules/molecules.styles';
import { Overview, OverViewTitles,OverviewContainer } from './organisms.syles';


  const TransactionOverview: React.FC = () => {
    return (
        <Overview>
        <OverViewTitles>
        <OverviewContainer className='income'>
            <span>Receitas</span>
            <span>300,00</span>
        </OverviewContainer>     
        <OverviewContainer className='expense'>
            <span>Despesas</span>
            <span>-300,00</span>
        </OverviewContainer>     
        <OverviewContainer className='balance'>
            <span>Saldo</span>
            <span>00,00</span>
        </OverviewContainer>     
        </OverViewTitles>
        </Overview>
        )
}
export default TransactionOverview;