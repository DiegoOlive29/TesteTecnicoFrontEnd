import { MainCenterStyle,LeftContainer, RightContainer } from "./styles"
const MainCenter=() =>{

    return (
        <MainCenterStyle>
            <LeftContainer>
                <h2>Simule sua Antecipação</h2>
                <form action="">
                    <label htmlFor="">Informe o Valor da venda <span>*</span></label>
                    <input type="text" />

                    <label htmlFor="">Em quantas parcelas <span>*</span></label>
                    <input type="text" />

                    <label htmlFor="">Informe o percentual de MDR <span>*</span></label>
                    <input type="text" />
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