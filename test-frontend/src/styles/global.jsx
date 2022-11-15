import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
    --white:#fff;
    --grey: rgba(212,222,229);
    --colordireita: rgba(247,249,250);
    --blue:rgba(61,117,187);
    --blueMin:rgba(126,176,239);
    --whiteback: rgba(245,247,250);


    }
    *{
        margin          : 0;
        padding         : 0;
        box-sizing      : border-box;
    }
    button {
        cursor          : pointer;
    }
    li,ul {
        list-style      : none;
    }
    a{
        text-decoration : none;
    }
    img{
        max-width       : 100%;
    }
    body{
        background-color: var(--whiteback);
        height          : 100vh;
        width           : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
    }
`