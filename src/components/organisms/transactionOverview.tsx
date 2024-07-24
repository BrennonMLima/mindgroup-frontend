import React, { useEffect, useState } from "react";
import {
    Overview,
    OverViewTitles,
    OverviewContainer,
} from "./organisms.styles";
import { getTotalDespesas, getTotalReceitas } from "../../service/transactions";

interface OverviewProps {
    userId: string;
    shouldUpdate: boolean;
}

const TransactionOverview: React.FC<OverviewProps> = ({
    userId,
    shouldUpdate,
}) => {
    const [despesas, setDespesas] = useState<number>(0);
    const [receitas, setReceitas] = useState<number>(0);
    const [saldo, setSaldo] = useState(0);

    const getDespesas = async () => {
        try {
            const {
                data: { totalDespesas }
            } = await getTotalDespesas();

            setDespesas(totalDespesas)
            return totalDespesas

        } catch (error) {
            setDespesas(0)
            return 0
        }
    }

    const getReceitas = async () =>  {
        try {
            const {
                data: { totalReceitas }
            } = await getTotalReceitas();

            setReceitas(totalReceitas)
            return totalReceitas

        } catch (error) {
            setReceitas(0)
            return 0
        }
    }

    const getTotal = async () => {
        setSaldo(await getReceitas() - await getDespesas())
    }

    useEffect(() => {
        getTotal();
    }, [userId, shouldUpdate]);

    return (
        <Overview>
            <OverViewTitles>
                <OverviewContainer className="income">
                    <span>Receitas</span>
                    <span>R$ {receitas}</span>
                </OverviewContainer>
                <OverviewContainer className="expense">
                    <span>Despesas</span>
                    <span>R$ {despesas}</span>
                </OverviewContainer>
                <OverviewContainer className="balance">
                    <span>Saldo</span>
                    <span>R$ {saldo}</span>
                </OverviewContainer>
            </OverViewTitles>
        </Overview>
    );
};

export default TransactionOverview;
