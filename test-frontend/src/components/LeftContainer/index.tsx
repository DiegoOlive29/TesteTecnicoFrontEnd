import {LeftContainer , SmallerText, Error } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { postAnt } from "../../service/postAnticipation";
import { ReactNode } from "react";

interface LeftProps{
    setDados:any ;
        
    }

const LeftCon=({setDados}:LeftProps) =>{
    interface CreateConsult{
        amount:number;
        installments: number;
        mdr: number
    }
    const formSchema  = yup.object().shape({
        amount       :yup.string().required("Campo obrigatório.").min(2,"Valor minimo é 10"),
        installments :yup.number().required("Campo obrigatório.").max(12),
        mdr          :yup.string().required("Campo obrigatório.") 
    });

    const { register, handleSubmit,formState:{ errors }} = useForm<CreateConsult>({resolver:yupResolver(formSchema)});

    const  handleSubmitPost = async (data:CreateConsult)=> {
       
        setDados(await postAnt(data))
        
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
                     <button type="submit">Enviar!</button>
                    </form>
            </LeftContainer>
            
            
            )
        }
        
        export default LeftCon
        