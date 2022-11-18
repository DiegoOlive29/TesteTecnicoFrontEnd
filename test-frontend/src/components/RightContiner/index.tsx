import {RightContainer  } from "./styles"
import {ResponsePost} from "../../service/postAnticipation"

interface ResponseDados{
    dados:ResponsePost | undefined;
}
const Right=({dados}:ResponseDados) =>{
    
    console.log(dados)
    return (
            
            <RightContainer>
                
                    <h3>VOCÊ RECEBERÁ:
                    <hr />
                    </h3>
                <p>Amanhã: <span>R$: {dados === undefined  ? ("0"):(dados[1])}</span></p>

                <p>Em 15 dias: <span>R$: {dados === undefined  ? ("0"):(dados[15])}</span></p>

                <p>Em 30 dias: <span>R$: {dados === undefined  ? ("0"):(dados[30])}</span></p>

                <p>Em 90 dias: <span>R$: {dados === undefined  ? ("0"):(dados[90])}</span></p>
                
            </RightContainer>
      
    )
}

export default Right