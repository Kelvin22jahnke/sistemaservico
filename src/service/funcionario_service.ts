import Funcionario, {IFuncionario} from "../model/funcionario_model";
import bcrypt from "bcrypt";

export class FuncionarioService {

     static async getAllFuncionario() : Promise<IFuncionario[] | undefined>
     {
        try {
            const allFuncionarios = await Funcionario.find({});
            return allFuncionarios;
        } catch (err) {
            console.log(err);
        }
     }

     static async getFuncionarioById(id:string): Promise<IFuncionario | null | undefined>
     {
        try {
            const funcionarioById = await Funcionario.findById(id);
            return funcionarioById;
        } catch (err) {
            console.log(err);
        }
     }

     static async createFuncionario(funcionarioDTO: IFuncionario) : Promise<IFuncionario | undefined>
     {
        try {

            const verifyingEmail = await Funcionario.findOne({email: funcionarioDTO.email});

            //Verifica se o email já existe
            if(verifyingEmail)  return undefined;
           
            const passHash = await bcrypt.hash(funcionarioDTO.senha, 10);
            const funcionarioEntity = new Funcionario ({
                nome: funcionarioDTO.nome,
                email: funcionarioDTO.email,
                senha: passHash,
                dataNascimento: funcionarioDTO.dataNascimento,
                dataAdmisao: funcionarioDTO.dataAdmisao,
                dataDemisao: funcionarioDTO.dataDemisao,
                obsDemisao: funcionarioDTO.obsDemisao,
                rua: funcionarioDTO.rua,
                bairro: funcionarioDTO.bairro,
                cep: funcionarioDTO.cep,
                foto:funcionarioDTO.foto,
                ativo:funcionarioDTO.ativo,
                salario:funcionarioDTO.salario,
                admin:funcionarioDTO.admin,
            });

            const funcionariosaved = await funcionarioEntity.save();
            return funcionariosaved;

        } catch (err) {
            console.log(err);
        }
     }

     static async updateFuncionario(id: string, funcionarioDTO: IFuncionario) :Promise<IFuncionario | null | undefined>
     {
        try {

            if (funcionarioDTO.email)
            {
                const verifyEmail = await Funcionario.findOne({email: funcionarioDTO.email});

                if(verifyEmail?.id != id)
                {
                    return undefined;
                }

            }
           
            if(funcionarioDTO.senha){
                const senhaCriptografada =  await bcrypt.hash(funcionarioDTO.senha, 10);
                funcionarioDTO.senha = senhaCriptografada;
            }
            
            const funcionarioUpdated = await Funcionario.findByIdAndUpdate(id,funcionarioDTO);

            if(funcionarioUpdated){
                const funcionario = await Funcionario.findById(id);
                return funcionario;
            }else{
                return undefined;
            }

        } catch (err) {
            console.log(err);
        }
     }

     static async deleteFuncionario(id:string) : Promise<IFuncionario | null | undefined>
     {
        try {
            const funcionarioDeleted = await Funcionario.findOneAndDelete({_id: id});
            return funcionarioDeleted;
        } catch (err) {
            console.log(err);
        }
     }
}