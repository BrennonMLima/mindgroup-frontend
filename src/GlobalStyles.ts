import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--preto);
    color: #fff;
}
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}

*, button, input {
border: 0;
outline: 0;
font-family: 'Roboto', sans-serif;
}

:root {
--preto: #161a1d;
--cinza-escuro: #333;
--azul-escuro: #011936;
--azul-claro: #3772FF;
}

.link{
    color: var(--azul-claro);
    text-decoration: none;
}
    h1,h2,h3,span,p,svg{
        background-color: transparent;
    }

textarea{
    display:flex;
    resize:none;
    height: 50px;
    align-items: center;
    font-size: 40px;
    width: 90%;
}
`;

