import express, { Request, Response } from "express";
import cors from "cors";
import { data } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// app.post("/create-user", (req: Request, res: Response) => {
//   const { name, cpf, bornDate } = req.body;

//   if (!name || !cpf || !bornDate) {
//     res.status(400).send("Deu ruim, passe os parametros ");
//   } else {
//     data.push({
//       id: Date.now(),
//       name: name,
//       cpf: cpf,
//       bornDate: bornDate,
//     });
//   }
//   res.status(200).send("Usuário criado");
// });


app.get("/all-users", (req: Request, res: Response) => {
    const allUsers = data.map((users)=>{
        return users
    })
    res.status(200).send(allUsers);
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
