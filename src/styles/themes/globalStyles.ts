import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        outline: 0;
        margin: 0;
        padding: 0;
        border: 0;

        font-family: 'Roboto', sans-serif;

        -ms-touch-action: none;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        position: relative;

        width: 100vw;
        height: 100vh;
    }
`;
 
export default GlobalStyle;