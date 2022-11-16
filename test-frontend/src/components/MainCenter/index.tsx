import { MainCenterStyle,LeftContainer, RightContainer, SmallerText } from "./styles"
const MainCenter=() =>{

    return (
        <MainCenterStyle>
            <LeftContainer>
                   
                    <form action="">

                        <h2>Simule sua Antecipação</h2>
                        
                        <label htmlFor=""> <p>Informe o valor da venda <span>*</span> </p>
                        <input type="text" />
                        </label>

                        <label htmlFor=""> <p>Em quantas parcelas <span>*</span> </p>
                        <input type="text" />
                        <SmallerText>Maximo de 12 parcelas</SmallerText>
                        </label>

                        <label htmlFor=""> <p>Informe o percentual de MDR <span>*</span> </p>
                        <input type="text" />
                        </label>
                  
                    </form>
            </LeftContainer>
            
            <RightContainer>
                
                    <h3>VOCÊ RECEBERÁ:
                    <hr />
                    </h3>
                <p>Amanhã: <span>R$ 0,00</span></p>

                <p>Em 15 dias: <span>R$ 0,00</span></p>

                <p>Em 30 dias: <span>R$ 0,00</span></p>

                <p>Em 90 dias: <span>R$ 0,00</span></p>
                
            </RightContainer>
        </MainCenterStyle>
    )
}

export default MainCenter