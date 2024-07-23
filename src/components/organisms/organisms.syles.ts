import styled from 'styled-components';

export const ModalStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: var(--white);
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
    background-color: var(--preto);
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 20px;
    min-width: 70%;
    margin-top: 20px;
    padding-bottom: 20px;
    word-break: break-all;
`;