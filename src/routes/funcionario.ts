import express, {Response, Request, Router} from "express";
import { FuncionarioController } from "../controller/funcionario_controller";
import { IFuncionario } from "../model/funcionario_model";
import { authToken } from "../middlewares/authentication";

const funcionarioRouter = express.Router();

funcionarioRouter.get("/funcionario", authToken, async (req: Request, res: Response) => {
    const allFuncionarios = await FuncionarioController.getAllFunc()
    if(allFuncionarios)
    {
        res.status(200).send(allFuncionarios);
    }else{
        res.sendStatus(404);
    }
});

funcionarioRouter.get("/funcionario/:id", authToken, async(req: Request, res:Response)=> {
    const id:string = req.params.id;
    const funcionarioById = await FuncionarioController.getByIdFunc(id);

    if(funcionarioById)
    {
        res.status(200).send(funcionarioById);
    }else
    {
        res.sendStatus(404);
    }
});

funcionarioRouter.post("/funcionario", authToken, async(req: Request, res:Response)=>{
    const funcionarioDTO: IFuncionario = req.body;
    const funcionarioCreated = await FuncionarioController.createFunc(funcionarioDTO);

    if(funcionarioCreated)
    {
        res.status(200).send(funcionarioCreated);
    }else {
        res.sendStatus(400);
    }

});

funcionarioRouter.put("/funcionario/:id", authToken, async(req: Request, res: Response) => {
    const id:string = req.params.id;
    const funcionarioDTO:IFuncionario = req.body;
    const funcionarioUpdated = await FuncionarioController.updateFunc(id, funcionarioDTO);

    if(funcionarioUpdated) 
    {
        res.status(200).send(funcionarioUpdated);
    }else 
    {
        res.sendStatus(400);
    }
});

funcionarioRouter.delete("/funcionario/:id", authToken, async(req:Request, res:Response) => {
    const id:string = req.params.id;
    const funcionarioDeleted = await FuncionarioController.deleteFunc(id);

    if(funcionarioDeleted)
    {
        res.status(200).send(funcionarioDeleted);
    }else
    {
        res.sendStatus(400);
    }
});

export default funcionarioRouter;
