import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userClassService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/User/user.entity';
import { loginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

   constructor(private userService: userClassService,
private jwtservice:JwtService
   ) { }

   async Login(logindto: loginDto): Promise<{accessToken:string}> {

      const databaseUser = await this.userService.login(logindto.email)

      if (!databaseUser) {
         throw new UnauthorizedException('couldnot find user')
      }
      const matchingPassword = await bcrypt.compare(logindto.password, databaseUser?.password)

      if (!matchingPassword) {
         throw new UnauthorizedException('wrong password')
      }

      const palyload={email:databaseUser.email,sub:databaseUser.id};
      return{
accessToken:this.jwtservice.sign(palyload)
      }

   }

}

//handles login logic