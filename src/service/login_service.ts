import Funcionario from "../model/funcionario_model";
import { generateToken } from "../utils/generate_token";
import { LoginSchema } from "../utils/types";
import bcrypt from "bcrypt"

export class LoginService {
    static async login(loginDTO: LoginSchema) : Promise<LoginSchema | undefined>
    {
        const funcLogin =  await Funcionario.findOne({email: loginDTO.email});

        if(funcLogin && loginDTO.senha)
        {
            const comparingPassword = await bcrypt.compare(loginDTO.senha, funcLogin.senha);

            if(comparingPassword)
            {
                const token = generateToken(funcLogin.id);

                if(token)
                {
                    const generatingReturnData: LoginSchema = {
                        email: funcLogin.email,
                        token: token,
                    };
    
                    //logged user
                    return generatingReturnData;
                    
                }else{
                    return undefined;
                }

            }else
            {
                return undefined;
            }
        }else
        {
            return undefined;
        }
    }
}