import { IFuncionario } from "../model/funcionario_model";
import { FuncionarioService } from "../service/funcionario_service";

export class FuncionarioController {

    static  async getAllFunc() : Promise<Array<IFuncionario> | undefined>
    {
        const allFuncionario = await FuncionarioService.getAllFuncionario();
        return allFuncionario;
    }

    static async getByIdFunc(id: string): Promise<IFuncionario | null | undefined> 
    {
        const funcionariById = await FuncionarioService.getFuncionarioById(id);
        return funcionariById;
    } 

    static async createFunc(objectDTO: IFuncionario) :Promise <IFuncionario | undefined>
    {
        const createdFuncionario = await FuncionarioService.createFuncionario(objectDTO);
        return createdFuncionario;
    }

    static async deleteFunc(id: string) : Promise<IFuncionario | null | undefined>
    {
        const funcionarioDeleted = await FuncionarioService.deleteFuncionario(id);
        return funcionarioDeleted;
    }

    static async updateFunc(id: string, objectDTO: IFuncionario) : Promise<IFuncionario | null | undefined> 
    {
        const  updatedFuncionario = await FuncionarioService.updateFuncionario(id, objectDTO);
        return updatedFuncionario;
    }

}