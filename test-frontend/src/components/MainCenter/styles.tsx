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

export const CenterContainer = styled.div`
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : space-around;
    height          : 100%;
    padding-top     : 10px;
    gap             : 25px;
`

export const Alert = styled.div`
    width           : 200px;
    
    padding-bottom  : 10px;
    padding-top     : 10px;
    background-color: var(--redErrorfundo);
    border          : solid 2px var(--redError);
    color           : var(--white);
    
`
export const Calc = styled.div`
    width           : 200px;
    padding-bottom  : 10px;
    padding-top     : 10px;
    background-color: var(--greenCalc);
    border          : solid 2px var(--greenCalcBord);
    color           : var(--white);
    
`