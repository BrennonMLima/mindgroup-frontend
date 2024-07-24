import styled from 'styled-components';

export const ModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--cinza-escuro);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 30px;
    min-width: 70%;
    padding: 20px 30px;
    margin-top: 20px;
}
`;
export const TransactionInput = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
`;

export const Table = styled.div`
    background-color: var(--cinza-escuro);
    box-shadow: 0px 0px 2px #ccc;
    border-radius: 20px;
    min-width: 70%;
    margin-top: 20px;
    padding-bottom: 20px;
    word-break: break-all;
`;

export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cinza-escuro);
    box-shadow: 0px 0px 2px #ccc;
    border-radius: 20px;
    min-width: 70%;
    margin-top: 20px;
    padding: 5px 20px 20px 20px;
`;
export const OverViewTitles = styled.div `
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;

export const OverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cinza-escuro);
    border-radius: 20px;
    min-width: 33%;
    margin-top: 20px;
    padding: 5px 10px 10px 10px;
    word-break: break-all;

    &.expense{
        box-shadow: 0px 0px 2px red;
    }
    &.income{
        box-shadow: 0px 0px 2px green;
    }
    &.balance{
        box-shadow: 0px 0px 2px var(--azul-claro);
    }      
`;