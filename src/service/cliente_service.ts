import Cliente, {ICliente} from "../model/cliente_model";

export class ClienteService {
    static async getAllClient(): Promise<Array<ICliente> | undefined>{
        try{
            const AllClients: Array<ICliente> = await Cliente.find({});
            return AllClients;
        }catch (err){
            console.log(err);
        }
    }

    static async getClientById(id:string) : Promise<ICliente | null | undefined> {
        try{
            const myclientByIdDTO: ICliente | null = await Cliente.findById(id);
            return myclientByIdDTO;
        }catch(err) {
            console.log(err);
        }
    }

    static async createClient(objectDTO:ICliente): Promise<ICliente | undefined> {
        try{
            const client: ICliente = new Cliente({
                nome: objectDTO.nome,
                dataNascimento: objectDTO.dataNascimento,
                rua: objectDTO.rua,
                obs: objectDTO.obs,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo
            })

            const clientSaved = await client.save();
            return clientSaved;

        }catch(err) {
            console.log(err);
        }
    }

    static async deleteClient(id: string): Promise<ICliente | null | undefined> {
        try {
            const clientDeleted = await Cliente.findOneAndDelete({_id: id});
            return clientDeleted;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateClient(id:string, objectDTO:ICliente): Promise<ICliente | null |undefined> {
        try {
            const client = await Cliente.findByIdAndUpdate(id, objectDTO);

            if(client){
                const clientUpdated = await Cliente.findById(id);
                return clientUpdated;
            }else {
                return undefined;
            }

        } catch (err) {
            console.log(err);
        }
    }
}