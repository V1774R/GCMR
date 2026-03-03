import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        box-sizing: border-box;
    }
    
    :root {
        --azul-escuro: #0B2C4D;
        --azul-medio: #154A7D;
        --azul-claro: #f5f9fd;
        --cinza-texto: #333;
        --branco: #ffffff;
    }

    main{
        min-height: calc(100dvh - 32px - 100px);
    }
`