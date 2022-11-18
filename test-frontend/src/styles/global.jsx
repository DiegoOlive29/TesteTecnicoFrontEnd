import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
    --white:#fff;
    --grey: rgba(212,222,229);
    --colordireita: rgba(245,245,245);
    --blue:rgba(61,117,187);
    --blueMin:rgba(126,176,239);
    --whiteback: rgba(245,247,250);
    --greytext: #626262;
    --greytextmin: #919191;
    --redError: #ad0000;
    --redErrorfundo: #fc3131d5;
    --greenCalc: #31fc42d4;
    --greenCalcBord: #19a425;

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