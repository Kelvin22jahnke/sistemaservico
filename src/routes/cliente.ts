import express, {Response, Request} from "express";
import { ClientController } from "../controller/cliente_controller";
import { ICliente } from "../model/cliente_model";
import { authToken } from "../middlewares/authentication";


const clienteRouter = express.Router();

clienteRouter.get("/cliente", authToken, async(req:Request, res:Response) => {
    const AllCli = await ClientController.getAllCli();
    if(AllCli){
        res.status(200).send(AllCli);
    }else{
        res.sendStatus(404);
    }
});

clienteRouter.get("/cliente/:id", authToken, async(req:Request, res:Response) => {
    const id:string = req.params.id;
    const clientByIdDTO = await ClientController.getByIdCli(id);
    if(clientByIdDTO){
        res.status(200).send(clientByIdDTO);
    }else{
        res.sendStatus(404);
    }
});

clienteRouter.post("/cliente", authToken, async(req:Request, res:Response) => {
    const clienteDTO: ICliente = req.body;
    const createdCliente = await ClientController.CreateCli(clienteDTO);

    if(createdCliente){
      res.status(201).send(createdCliente);
    }else
    {
      res.sendStatus(400);
    }
});

clienteRouter.put("/cliente/:id", authToken, async(req:Request, res:Response) => {
    const id: string = req.params.id;
    const clientDTO: ICliente = req.body;
    const updatedClint = await ClientController.updateCli(id, clientDTO);
    if(updatedClint)
    {
        res.status(200).send(updatedClint);
    }else {
        res.sendStatus(400);
    }
});

clienteRouter.delete("/cliente/:id", authToken, async(req:Request, res:Response) => {
    const id: string = req.params.id;
    const deleteClient = await ClientController.deleteCli(id);

    if(deleteClient){
        res.status(200).send(deleteClient);
    }else{
        res.sendStatus(400);
    }

});

export default clienteRouter;