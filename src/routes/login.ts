import express, {Request, Response} from "express";
import { LoginSchema } from "../utils/types";
import { LoginController } from "../controller/login_controller";

const loginRouter = express.Router();

loginRouter.post("/login", async (req:Request, res: Response) =>{
    const loginDTO: LoginSchema = req.body;
    const logedData = await LoginController.login(loginDTO);

    if(logedData)
    {
        res.status(200).send(logedData)
    }else
    {
        res.sendStatus(400);
    }
});

export default loginRouter;