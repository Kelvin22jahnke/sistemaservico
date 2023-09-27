import express, {Response, Request} from "express";
import { IServico } from "../model/servico_model";
import { ServicoController } from "../controller/servico_controller";
import { authToken } from "../middlewares/authentication";

const servicoRouter = express.Router();

servicoRouter.post("/servico", authToken, async (req:Request, res: Response) => 
{
    const servicoDTO: IServico = req.body;
    const ServicoCreated = await ServicoController.createSvc(servicoDTO);

    if(ServicoCreated){
        res.status(200).send(ServicoCreated);
    }else {
        res.sendStatus(400);
    }

});

servicoRouter.get("/servico", authToken, async(req:Request, res:Response) => 
{
    const allDataServico = await ServicoController.getAllSvc();

    if(allDataServico)
    {
        res.status(200).send(allDataServico);
    }else{
        res.sendStatus(404);
    }
});

servicoRouter.get("/servico/:id", authToken, async(req:Request, res:Response) => 
{
    const id: string = req.params.id;
    const servicoById = await ServicoController.getByIdSvc(id);

    if(servicoById)
    {
        res.status(202).send(servicoById);
    }else 
    {
        res.sendStatus(404);
    }
});

servicoRouter.put("/servico/:id", authToken, async (req:Request, res:Response) => 
{
    const id: string = req.params.id;
    const servicoDTO:IServico = req.body;    
    const servicoUpdated = await ServicoController.updateSvc(id, servicoDTO);

    if(servicoUpdated){
        res.status(200).send(servicoUpdated);
    }else {
        res.sendStatus(400);
    }

});

servicoRouter.delete("/servico/:id", authToken, async(req:Request, res:Response) =>
{
    const id:string = req.params.id;
    const servicoDeleted = await ServicoController.deleteSvc(id);

    if(servicoDeleted)
    {
        res.status(200).send(servicoDeleted); 
    }else {
        res.sendStatus(400);
    }

});

export default servicoRouter;