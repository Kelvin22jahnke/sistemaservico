import Servico, {IServico} from "../model/servico_model";
import Funcionario from "../model/funcionario_model";
import Cliente from "../model/cliente_model";

export class ServicoService 
{
    static async createService(serviceDTO: IServico): Promise<IServico | undefined>
    {

        try {

            const foundClient  =  await Cliente.findById(serviceDTO.cliente);
            const foundFuncionario = await Funcionario.findById(serviceDTO.funcionario);

            const serviceMapped = new Servico({
                nome: serviceDTO.nome,
                descricao: serviceDTO.descricao,
                valor: serviceDTO.valor,
                tempoServico: serviceDTO.tempoServico,
                ativo: serviceDTO.ativo,
                funcionario: foundFuncionario,
                cliente: foundClient,
                status: serviceDTO.status
            })

            const savedService = serviceMapped.save();
            return savedService;

        } catch (err) {
            console.log(err);
        }
    }

    static async getAllService() : Promise<Array<IServico> | undefined>  
    {
        try {
            const allDataService: Array<IServico> = await Servico.find({}).populate([{path:"funcionario"}, {path:"cliente"}]);
            return allDataService;
        } catch (err) { 
            console.log(err);
        }
    }

    static async getByIdService(id:String) : Promise<IServico | undefined | null> 
    {
        try {
            const serviceById = await Servico.findById(id).populate([{path: "funcionario"}, {path: "cliente"}]);
            return serviceById;
        } catch (err) {
            console.log(err);
        }
    }

    static async UpdateService(id:string ,servicoDTO: IServico) : Promise<IServico | undefined | null> 
    {

        try {
            const servicoUpdating = await Servico.findByIdAndUpdate(id, servicoDTO);

            if(servicoUpdating)
            {
                const updatedData = await Servico.findById(id);
                return updatedData;
            }else {
                return undefined;
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteService(id: string): Promise<IServico | undefined | null> 
    {
        try {
            const serviceDeleted = await Servico.findOneAndDelete({_id:id});
            return serviceDeleted;
        } catch (err) {
            console.log(err);
        }
    }
}