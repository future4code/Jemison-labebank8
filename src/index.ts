import express, { Request, Response } from "express";
import cors from "cors";
import { data } from "./data";
import { newClient, Transactions } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

// ---- Criar uma nova conta ----

app.post("/create-user", (req: Request, res: Response) => {
  let errorCode = 400
  try{

   // Pegar as informações
   const { name, newCpf, bornDate } = req.body;

   // Verificar se existem dados passados
   if(!name || !newCpf || !bornDate){
      errorCode = 422
      throw new Error("Dados incorretos ou não informados");
   }

   // Verificar se o CPF já existe
   const cpfSearched = data.find((user) => {
    return user.cpf === newCpf
   })

   // Caso CPF já exista:
   if(cpfSearched){
    errorCode = 409
    throw new Error("Este CPF já está cadastrado em nosso sistema"); 
   }

   // Verificar se é maior de 18 anos:
   if((Date.now() - Date.parse(bornDate)) < 567648000000){
    errorCode = 422
    throw new Error("Para se cadastrar você precisa ter mais de 18 anos");
    
   }

   // Recebendo os novos dados em uma variavel
   const newUser : newClient = {
    id: Math.random(),
    name: name,
    cpf: newCpf,
    bornDate: bornDate,
    balance: 0,
    extract: []
   }

   // Atualiar DB com novos dados
   data.push(newUser)

   res.status(200).send(data)

  }catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})


// ------- Pagando contas --------

app.patch("/user-pay/:id",(req: Request, res: Response) => {
    let errorCode = 400

    try{
      // Pegando informações via query
      const userId = Number(req.params.id);
      const {valuePay, date, description} = req.body;

      //Validando informações
      if(!valuePay || !description){
        errorCode = 422
        throw new Error("Passe o valor e a descrição do pagamento");
      }


      //Verificando se existe saldo para efetuar o pagamento
      const newValue = data.find((user) => {
        if(userId === user.id){
          return user.balance > valuePay
        }
      })
      if(!newValue){
        errorCode = 422
        throw new Error("Saldo insuficiente");
        
      }
      let newDate = ''

      if(!date){
         newDate = Date.now().toString()
      }

      // Adicionando pagamentos e alterando saldo

      const newPay : Transactions = {
            value: valuePay,
            date: newDate,
            description: description
      }

      for (let i=1 ; i < data.length ; i++){
         if(data[i].id === userId){
            data[i].balance =- newValue
            data[i].extract.push(newPay)
         }
       }

      res.status(200).send(data)

    }catch(error:any){
      res.status(errorCode).send(error.message)
    }

})

// Rodando no servidor local

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
