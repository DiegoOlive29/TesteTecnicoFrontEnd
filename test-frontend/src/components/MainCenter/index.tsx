import { MainCenterStyle,  } from "./styles"
import LeftCon from "../LeftContainer"
import Right from "../RightContiner"
import { useState } from "react"
import { ResponsePost } from "../../service/postAnticipation"

const MainCenter=() =>{
    const [dados, setDados] = useState<ResponsePost>() 

    return (
        <MainCenterStyle>
           <LeftCon setDados={setDados} />
            
            <Right dados={dados} />

        </MainCenterStyle>
    )
}

export default MainCenter