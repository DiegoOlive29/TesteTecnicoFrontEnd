import styled  from "styled-components";

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
