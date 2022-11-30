import { newClient } from './type';


export const data: newClient[] = [
    {
        id: 1,
        name: "Ana Maria",
        cpf: "123.456.789-00",
        bornDate: "1975-01-01",
        balance: 100,
        extract:[
            {
                value: 35,
                date: "2022-11-11",
                description:"Telefone"
            }
        ]
    },
    {
        id: 2,
        name: "Bruno Carlos",
        cpf: "234.567.890-12",
        bornDate: "1982-02-02",
        balance: 1000,
        extract:[
            {
                value: 350,
                date: "2022-11-11",
                description:"Master Card"
            },
            {
                value: 150,
                date: "2022-11-11",
                description:"Plano de saúde" 
            }
        ]
    },
    {
        id: 3,
        name: "Carla Suzana",
        cpf: "567.890.123-23",
        bornDate: "1990-05-05",
        balance: 1700,
        extract:[
            {
                value: 230,
                date: "2022-11-11",
                description:"Material de limpeza"
            },
            {
                value: 475,
                date: "2022-11-11",
                description:"Universidade" 
            },
            {
                value: 675,
                date: "2022-11-11",
                description:"Financiamento" 
            }
        ]
    },
    
]