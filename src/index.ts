import express from "express";
import "dotenv/config";
import { routes } from "./routes";
import db from "./repository/db";
import cors from "cors";

//Estabelece a conexão com o banco 
db.on("error", () => console.log("Erro em estabelecer conexao"));
db.once("open",() => {
    console.log("Conexão estabelecida com o banco")
});


//Cria uma instancia do express
const app = express();

//Definindo as nossas rotas
routes(app);

//cors
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`O app está ouvindo a porta ${process.env.PORT}`);
})