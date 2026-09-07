import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth') //auth/register
export class AuthController {

    constructor(private readonly authservice: AuthService){}
    @Post("register")
    register(){ 

        const result= this.authservice.registerUser()
        return result;
    }
}
