import styled from 'styled-components';

export const HeaderStyled = styled.div`
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background-color: var(--azul-escuro);
    color: #fff;
    padding: 20px 35px; 
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--azul-escuro);
    gap: 6px;
`
export const FooterStyled = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: center;
    background-color: var(--azul-escuro);
    color: #fff;
    gap: 10px;
    padding: 10px 25px; 
`
export const SearchBoardlStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 30px;
    min-width: 70%;
    padding: 20px 30px;
    margin-top: 20px;
`
export const TableHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border-bottom: 0.07rem dotted #e3e3e3;
    min-width: 70%;
    padding: 10px 30px;
    margin-top: 0px;
    
    table tr:nth-child(odd) {
        background-color: #f0f0f0;
    }

  table tr:nth-child(even) {
        background-color: #fff;
  }
`;

export const ModalHeaderStyled = styled.div`
`
export const ModalLabelStyled = styled.div`
`
