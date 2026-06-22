import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { createUserDto } from 'src/User/dto/create-user.dto';
import { User } from 'src/User/user.entity';
import { userClassService } from 'src/User/user.service';
import { loginDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { jwtAuthGuard } from './jwt-guard';
import { enable2FAType } from './types';
import { Request } from '@nestjs/common';
import { ValidateTokenDto } from './dto/validate-token-dto';
import { UpdateResult } from 'typeorm';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
       private userService:userClassService, //sign up
       private authservice:AuthService //login
      ){}
    @Post('Signup')
    @ApiOperation({summary:'register new user'})
    @ApiResponse({
      status:201,
      description:'user created well'
    })
    Signup(@Body() userDto:createUserDto):Promise<User>{
      return this.userService.create(userDto)
    }

    @Post('login')
    @ApiOperation({summary:'Login user'})
    @ApiResponse({
      status:200,
      description:'it will give you acces to a token'
    })
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

    @Get('Disable-2FA')
    @UseGuards(jwtAuthGuard)
    disable2FA(@Request() req ) : Promise<UpdateResult>{
      return this.userService.disable2FA(req.user.userId)
    }
    @Get('test')
    testEnviVariable(){
return this.authservice.getEnviriable()
    }
}
//  this are endPoints