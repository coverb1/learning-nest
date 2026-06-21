import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { createUserDto } from "./dto/create-user.dto";
import  * as bcrypt from 'bcrypt'
import * as speakeasy from 'speakeasy'
import { UpdateResult } from "typeorm";


@Injectable()

export class userClassService{
 constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
 ){}
  // CREATE USER
 async create(userDto:createUserDto):Promise<User>{
    const salt= await bcrypt.genSalt()
    userDto.password=await bcrypt.hash(userDto.password,salt)
    const user=await this.userRepository.save(userDto)
    
    return user
 }
 // LOGIN
async login(email:string):Promise<User|null>{
   return this.userRepository.findOneBy({email})
}
 // FIND USER BY ID
async findById(id:number):Promise<User|null>{
   return this.userRepository.findOneBy({id})
}

 // UPDATE 2FA SECRET
 async updateSecreteKey(id:number,secret:string) : Promise<void>{
   await this.userRepository.update(id,{
      twoFAsecrete:secret,
      enable2FA:true
   })
 }

 async validate2FAToken(userId:number,token:string):Promise<{verified:boolean}>{
   try {
      // Find user based onId
      const user=await this.userRepository.findOneBy({id:userId})

      if (!user) {
         throw new UnauthorizedException('user not found during veryfing  validatingToke')
      }
      // extract his 2FA

      const verified=speakeasy.totp.verify({
         secret:user.twoFAsecrete,
         token:token,
         encoding:'base32'
      })

      if (verified) {
         return {verified:true}
      }
      else{
         return {verified:false}
      }
   } catch (error) {
      throw new UnauthorizedException('error verifying token')
   }
 }

 async disable2FA(userId:number) : Promise<UpdateResult>{
   return this.userRepository.update({id:userId},{
      enable2FA:false
   })
 }
}

// it is the one which is handleling database Operation for users