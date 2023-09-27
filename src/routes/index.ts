import express from "express";
import { Express, Request, Response } from "express";
import clienteRouter from "./cliente";
import funcionarioRouter from "./funcionario";
import servicoRouter from "./servico";
import loginRouter from "./login";

export const routes = (app: Express) => {
    app.route("/").get((req: Request, res: Response)=>{
        res.status(200).json({message: "API Serviços"})
    });

    app.use(express.json(), clienteRouter, funcionarioRouter, servicoRouter, loginRouter);
};

