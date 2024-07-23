import React, { useEffect, useState } from 'react';
import { ModalHeaderStyled } from '../molecules/molecules.styles';
import { Overview, OverViewTitles, OverviewContainer } from './organisms.syles';
import { getTotalDespesas, getTotalReceitas } from '../../service/transactions';

interface OverviewProps {
    userId: string;
}

const TransactionOverview: React.FC<OverviewProps> = ({ userId }) => {
    const [totalDespesas, setTotalDespesas] = useState(0);
    const [totalReceitas, setTotalReceitas] = useState(0);
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        const fetchTransactionSummary = async () => {
            try {
                const despesasResponse = await getTotalDespesas();
                setTotalDespesas(despesasResponse.data.totalDespesas);

                const receitasResponse = await getTotalReceitas();
                setTotalReceitas(receitasResponse.data.totalReceitas);
            } catch (error) {
                console.log('Despesa/Receita não encontrada.', error);
            }
        };

        fetchTransactionSummary();
    }, [userId]);

    useEffect(() => {
        setSaldo(totalReceitas - totalDespesas);
    }, [totalReceitas, totalDespesas]);

    return (
        <Overview>
            <OverViewTitles>
                <OverviewContainer className='income'>
                    <span>Receitas</span>
                    <span>R$ {totalReceitas}</span>
                </OverviewContainer>
                <OverviewContainer className='expense'>
                    <span>Despesas</span>
                    <span>R$ {totalDespesas}</span>
                </OverviewContainer>
                <OverviewContainer className='balance'>
                    <span>Saldo</span>
                    <span>R$ {saldo}</span>
                </OverviewContainer>
            </OverViewTitles>
        </Overview>
    );
};

export default TransactionOverview;
