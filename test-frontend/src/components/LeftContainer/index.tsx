import {LeftContainer , SmallerText, Error, ButtonSend } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { postAnt } from "../../service/postAnticipation";


interface LeftProps{
    setDados:Function ;
    setLoad:Function;
    setInternalProblem:Function;

    }



const LeftCon=({setDados,setLoad,setInternalProblem}:LeftProps) =>{

    interface CreateConsult{
        amount:number;
        installments: number;
        mdr: number
    }
    const formSchema  = yup.object().shape({
        amount       :yup.number().typeError("Campo obrigatório.").min(2,"Valor minimo é 10").required("Campo obrigatório."),
        installments :yup.number().typeError("Campo obrigatório.").max(12).required("Campo obrigatório."),
        mdr          :yup.number().typeError("Campo obrigatório.").required("Campo obrigatório.") 
    });

    const { register, handleSubmit,formState:{ errors }} = useForm<CreateConsult>({resolver:yupResolver(formSchema)});

    const  handleSubmitPost = async (data:CreateConsult)=> {
        setLoad(true);
        setInternalProblem(false)
        setDados(await postAnt(data).catch((err)=> {
            setInternalProblem(true)
        }))

        setLoad(false)
        
    }

    return (
            
            <LeftContainer>
                
                    <form onSubmit={handleSubmit(handleSubmitPost)}>
                    
                        <h2>Simule sua Antecipação</h2>
                        
                        <label htmlFor=""> <p>Informe o valor da venda <span>*</span> </p>
                        <input type="text" placeholder="Numeros" {...register('amount')}/>
                        <Error>{errors.amount?.message}</Error>
                        </label>
                        <label htmlFor=""> <p>Em quantas parcelas <span>*</span> </p>
                        <input type="text" placeholder="Numeros"  {...register('installments')} />
                        <SmallerText>Maximo de 12 parcelas</SmallerText>
                         <Error>{errors.installments?.message}</Error>
                        </label>

                        <label htmlFor=""> <p>Informe o percentual de MDR <span>*</span> </p>
                        <input type="text" placeholder="Numeros" {...register('mdr')} />
                         <Error>{errors.mdr?.message}</Error>
                        </label>
                     <ButtonSend type="submit">Enviar !</ButtonSend>
                    </form>
                    
            </LeftContainer>
            
          
            )
        }
        
        export default LeftCon
        