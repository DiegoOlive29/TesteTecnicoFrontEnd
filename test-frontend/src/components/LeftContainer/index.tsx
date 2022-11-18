import {LeftContainer , SmallerText, Error } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const LeftCon=() =>{
    interface CreateConsult{
        saleValue:string;
    qtdParcel:string;
    percentage:string;
    }
    const formSchema  = yup.object().shape({
        saleValue   :yup.string().required("Campo obrigatório.") ,
        qtdParcel   :yup.string().required("Campo obrigatório.") ,
        percentage  :yup.string().required("Campo obrigatório.") 
    });

    const { register, handleSubmit,formState:{ errors }} = useForm<CreateConsult>({resolver:yupResolver(formSchema)});

    const handleSubmitFunction = (data:CreateConsult)=> console.log(data)

    return (
       
            <LeftContainer>
                   
                    <form onSubmit={handleSubmit(handleSubmitFunction)}>

                        <h2>Simule sua Antecipação</h2>
                        
                        <label htmlFor=""> <p>Informe o valor da venda <span>*</span> </p>
                        <input type="text" placeholder="Numeros" {...register('saleValue')}/>
                        <Error>{errors.saleValue?.message}</Error>
                        </label>
                        <label htmlFor=""> <p>Em quantas parcelas <span>*</span> </p>
                        <input type="text" placeholder="Numeros"  {...register('qtdParcel')} />
                        <SmallerText>Maximo de 12 parcelas</SmallerText>
                         <Error>{errors.qtdParcel?.message}</Error>
                        </label>

                        <label htmlFor=""> <p>Informe o percentual de MDR <span>*</span> </p>
                        <input type="text" placeholder="Numeros" {...register('percentage')} />
                         <Error>{errors.percentage?.message}</Error>
                        </label>
                    
                     <button type="submit">Enviar!</button>
                    </form>
            </LeftContainer>
            
            
            )
        }
        
        export default LeftCon
        