import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
    --white:#fff;
    --grey: #2d2c2c;
    --blue: #4671e9;
    --whiteback: #d2d2d2;


    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
    }
    li,ul {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }
    body{
        background-color:var(--whiteback)
    }
`