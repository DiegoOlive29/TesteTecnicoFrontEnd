import styled  from "styled-components";

export const MainCenterStyle = styled.main`  
    background-color: var(--white);
    width           : 600px;
    height          : 400px;
    border-radius   : 3px;
    border          : solid 2px var(--grey);
    display         : flex;
    flex-direction  : row;
    align-items     : center;
    justify-content : center;

`
export const LeftContainer =styled.div`

    width           : 60%;
    height          : 100%;
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
    gap             : 25px;

    form{
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
        display         : flex;
        flex-direction  : column;
        align-items     : flex-start;
        justify-content : space-around;
        height          : 100%;
        padding-top     : 25px;
        padding-bottom  : 25px;
        
    }

    h2{
        color           : var(--greytext);
    }
    label{
        display         : flex;
        flex-direction  : column;
        align-items     : flex-start;
        font-size       : 12px;
        color           : var(--greytext);
        font-weight     : 600;
        gap             : 3px;

    }
    input{
        width           : 250px;
        height          : 35px;
        border-radius   : 5px;
        border-style    : none;
        border          : solid 1px var(--grey);
        padding-left    : 10px;
        outline         : 0;
        
    }
    input:hover{
        border          : solid 1px var(--blueMin);
        
    }
    
`
export const SmallerText = styled.p`
    font-size           : 10px;
    color               : var(--greytextmin)

`

export const CenterContainer = styled.div`
    display         : flex;
    flex-direction  : column;
    align-items     : flex-start;
    justify-content : space-around;
    height          : 100%;
    padding-top     : 10px;
    gap             : 25px;
`


export const RightContainer =styled.div`
    background-color: var(--colordireita);
    width           : 40%;
    height          : 100%;
    display         : flex;
    flex-direction  : column;
    align-items     : flex-start;
    justify-content : center;
    color           : var(--blueMin);
    gap             : 35px;
    padding-left    : 25px;
    
    span{
        font-weight  : bold  
    }
    hr{
        width       : 120%;
        color       : var(--blueMin);
        margin-top  : 5px;
        
    }
    h3{
        color       : var(--blue);
        font-style  : italic;

    }
    p,span{
        font-style  : italic;

    }
`

