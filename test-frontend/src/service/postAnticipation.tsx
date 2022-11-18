import { api } from "../utils/urls";


interface DataPostAnt{
    amount:number;
    installments: number;
    mdr: number
}
export interface ResponsePost{
    1 :number;
    15:number;
    30:number;
    90:number
}


export async function postAnt(dataAnt:DataPostAnt): Promise<ResponsePost> {

    let {amount,installments,mdr} = dataAnt;

    amount = amount *100
    
    const {data} = await api.post('',{amount,installments,mdr})

    console.log(data)

    return data
}   