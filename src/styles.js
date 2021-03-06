import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    html {
        scroll-behavior:smooth;
    }

    * {
        box-sizing: border-box;
    }

    body,h1,h2,p,ul,li,a {
        margin: 0px;
        padding:0px;
    }

    body {
        font-family: 'Nunito', Arial, Helvetica, sans-serif;
        color: #222222;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
