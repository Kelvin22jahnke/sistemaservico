import mongoose, {Document, IfUnknown, Model} from "mongoose";
mongoose.set("debug", true);

export interface IFuncionario extends Document
{
    nome: string;
    email:string;
    senha: string;
    dataNascimento: Date;
    dataAdmisao:Date;
    dataDemisao:Date;
    obsDemisao?:string;
    rua: string;
    bairro: string;
    cep: string;
    foto?: string;
    ativo?:boolean;
    salario: number;
    admin?: boolean;
}

const funcionarioSchema = new mongoose.Schema<IFuncionario>({
    nome: {type:String, required:true},
    email: {type:String, required: true},
    senha: {type:String, required:true},
    dataNascimento:{type:Date,required: true},
    dataAdmisao: {type:Date, required: true},
    dataDemisao: {type:Date, required:true},
    obsDemisao: {type: String, required: false},
    rua: {type:String, required: true},
    bairro: {type:String, required: true},
    cep: {type:String,required: true},
    foto: {type:String,required:false},
    ativo: {type:Boolean,default: true},
    salario: {type: Number, required: true},
    admin: {type: Boolean, required: false, default: false}
},{versionKey: false}
);

const Funcionario: Model<IFuncionario> = mongoose.model<IFuncionario>("funcionarios",funcionarioSchema);

export default Funcionario;