import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { createUserDto } from 'src/User/dto/create-user.dto';
import { User } from 'src/User/user.entity';
import { userClassService } from 'src/User/user.service';
import { loginDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { jwtAuthGuard } from './jwt-guard';
import { enable2FAType } from './types';
import { Request } from '@nestjs/common';
import { ValidateTokenDto } from './dto/validate-token-dto';

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
    Login(@Body() logindto:loginDto):Promise<{accessToken:string}>{
      return this.authservice.Login(logindto)
    }


    @Post('Enable2FA')
    @UseGuards(jwtAuthGuard)
    enable2FA(@Request() req,):Promise<enable2FAType>{
      console.log(req.user)
      return this.authservice.enable2FA(req.user.userId
      )
    }

    @Post('validate-2fa')
    @UseGuards(jwtAuthGuard)
    validate2FA(@Request() req, @Body() validatetokenDto:ValidateTokenDto):Promise<{verified:boolean}>{
      return this.userService.validate2FAToken(
        req.user.userId,
        validatetokenDto.token
      )
    }
}
