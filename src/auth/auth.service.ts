import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userClassService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/User/user.entity';
import { loginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ArtitstsService } from 'src/artitsts/artitsts.service';
import { enable2FAType, payloadType } from './types';
import * as speakeasy from 'speakeasy'
import { UpdateResult } from 'typeorm';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {

   constructor(
      private userService: userClassService,
      private jwtservice: JwtService,
      private artistServices: ArtitstsService,
      private configService:ConfigService
   ) { }

   async Login(logindto: loginDto): Promise<{ accessToken: string }> {

      const databaseUser = await this.userService.login(logindto.email)

      if (!databaseUser) {
         throw new UnauthorizedException('couldnot find user')
      }
      const matchingPassword = await bcrypt.compare(logindto.password, databaseUser?.password)

      if (!matchingPassword) {
         throw new UnauthorizedException('wrong password')
      }

      const palyload: payloadType = { email: databaseUser.email, UserId: databaseUser.id };
      // find if it is  an artist then add  the artist to the playload
      const Artist = await this.artistServices.findArtist(databaseUser.id)
      if (Artist) {
         palyload.ArtistId = Artist.id
      }
      return {
         accessToken: this.jwtservice.sign(palyload)
      }
   }

   async enable2FA(userId: number): Promise<enable2FAType> {
      const user = await this.userService.findById(userId)

      // check if user exist

      if (!user) {
         throw new UnauthorizedException('userNotExist')
      }
      // Check if 2FA already enabled
      if (user?.enable2FA) {
         return { secret: user.twoFAsecrete }
      }
      // Generate new secret
      const secret = speakeasy.generateSecret()
      console.log(secret)

      // Save secret
      user.twoFAsecrete = secret.base32

      await this.userService.updateSecreteKey(user.id, user?.twoFAsecrete)
      return { secret: user?.twoFAsecrete }
   }


   async disable2FA(userId: number): Promise<UpdateResult> {
      return this.userService.disable2FA(userId)
   }
   getEnviriable(){
      return this.configService.get<number>('port')
   }
}

//handles login logic