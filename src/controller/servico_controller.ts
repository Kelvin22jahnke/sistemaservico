import { IServico } from "../model/servico_model";
import { ServicoService } from "../service/servico_service";

export class ServicoController {

    static async createSvc(servicoDTO: IServico): Promise<IServico | undefined> 
    {
        const servicoCreated  = await ServicoService.createService(servicoDTO);
        return servicoCreated;
    }

    static async getAllSvc(): Promise<Array<IServico> | undefined>
    {
        const allDataServico = await ServicoService.getAllService();
        return allDataServico;
    }

    static async getByIdSvc(id: string): Promise<IServico | undefined | null> 
    {
        const servicoById = await ServicoService.getByIdService(id);
        return servicoById;
    }

    static async updateSvc(id: string, servicoDTO: IServico): Promise<IServico | undefined | null> 
    {
        const servicoUpdated = await ServicoService.UpdateService(id, servicoDTO);
        return servicoUpdated;
    }

    static async deleteSvc(id:string): Promise<IServico | undefined | null>
    {
        const servicoDeleted = await ServicoService.deleteService(id);
        return servicoDeleted;
    }

}