import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from 'src/User/dto/create-user.dto';
import { User } from 'src/User/user.entity';
import { userClassService } from 'src/User/user.service';
import { loginDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(
       private userService:userClassService, //sign up
       private authservice:AuthService //login
      ){}
    @Post('Signup')
    Signup(@Body() userDto:createUserDto):Promise<User>{
      return this.userService.create(userDto)
    }

    @Post('login')
    Login(@Body() logindto:loginDto):Promise<User>{
      return this.authservice.FindOne(logindto)
    }
}
