import { LoginSchema } from "../utils/types";
import { LoginService } from "../service/login_service";

export class LoginController
{
    static async login(loginDTO: LoginSchema):Promise<LoginSchema | undefined>
    {
        const logedData = await LoginService.login(loginDTO);
        return logedData;
    }
}