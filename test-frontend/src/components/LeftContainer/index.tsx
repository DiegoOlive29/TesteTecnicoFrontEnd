import {LeftContainer , SmallerText } from "./styles"
const LeftCon=() =>{

    return (
       
            <LeftContainer>
                   
                    <form action="">

                        <h2>Simule sua Antecipação</h2>
                        
                        <label htmlFor=""> <p>Informe o valor da venda <span>*</span> </p>
                        <input type="text" placeholder="Numeros" />
                        </label>

                        <label htmlFor=""> <p>Em quantas parcelas <span>*</span> </p>
                        <input type="text" placeholder="Numeros" />
                        <SmallerText>Maximo de 12 parcelas</SmallerText>
                        </label>

                        <label htmlFor=""> <p>Informe o percentual de MDR <span>*</span> </p>
                        <input type="text" placeholder="Numeros" />
                        </label>
                  
                    </form>
            </LeftContainer>
            
          
    )
}

export default LeftCon