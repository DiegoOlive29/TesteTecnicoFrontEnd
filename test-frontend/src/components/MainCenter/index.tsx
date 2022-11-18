import { MainCenterStyle,Alert,Calc,CenterContainer  } from "./styles"
import LeftCon from "../LeftContainer"
import Right from "../RightContiner"
import { useState } from "react"
import { ResponsePost } from "../../service/postAnticipation"

const MainCenter=() =>{
    const [dados, setDados] = useState<ResponsePost>() 
    const [load, setLoad] = useState<boolean>(false)
    const [internal, setInternalProblem] = useState<boolean>(false)

    return (
        <CenterContainer>  
                {load === false ? ( "" ):( <Calc>Calculado...</Calc>)}
                {internal === false ? ( "" ):( <Alert>Erro de conexão, por gentileza verificar...</Alert>)}
            <MainCenterStyle>
                
                <LeftCon setDados={setDados} setLoad={setLoad} setInternalProblem={setInternalProblem} />
                
                <Right dados={dados} />

            </MainCenterStyle>

            
        </CenterContainer>
    )
}

export default MainCenter