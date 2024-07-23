import styled from 'styled-components';

export const InputStyles = styled.input`
    background: #212528;
    border: 0.07rem solid #e3e3e3;
    box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
    border-radius: 10px;
    padding: 12px;

    &:focus {
        background: var(--preto);
    }
    
    &.filled {
        background: var(--preto);
    }

    &.number-input {
        background: #212528;
        border: 0.07rem solid #e3e3e3;
        box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
        border-radius: 10px;
        margin-right: 15px;
        padding: 10px 10px;
        max-width: 80px;
    }
`;

//background: var(--preto);
//background: #212528;