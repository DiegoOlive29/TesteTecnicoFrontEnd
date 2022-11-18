import styled  from "styled-components";
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
color               : var(--greytextmin);

`

export const Error = styled.span`
  
  font-size         : 10px;
  color             : var(--redError);
`;