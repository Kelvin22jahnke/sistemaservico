import { ICliente } from "../model/cliente_model";
import { ClienteService } from "../service/cliente_service";

export class ClientController {
    static async getAllCli(): Promise<Array<ICliente> | undefined> {
        const AllData = await ClienteService.getAllClient();
        return AllData;
    }

    static async getByIdCli(id: string) : Promise<ICliente | null | undefined>{
        const clientById = await ClienteService.getClientById(id);
        return clientById;
    }

    static async CreateCli(objectDTO: ICliente): Promise<ICliente | undefined> {
        const createdCliente = await ClienteService.createClient(objectDTO);
        return createdCliente;
    }

    static async deleteCli(id: string): Promise<ICliente | null | undefined>
    {
        const deleteClient = await ClienteService.deleteClient(id);
        return deleteClient;
    }

    static async updateCli(id:string, objectDTO: ICliente) : Promise<ICliente | null | undefined>{
        const updateClient = await ClienteService.updateClient(id,objectDTO);
        return updateClient;
    }
}