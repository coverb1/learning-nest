import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { createUserDto } from "./dto/create-user.dto";
import  * as bcrypt from 'bcrypt'
import { loginDto } from "src/auth/dto/login-user.dto";

@Injectable()

export class userClassService{
 constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
 ){}

 async create(userDto:createUserDto):Promise<User>{
    const salt= await bcrypt.genSalt()
    userDto.password=await bcrypt.hash(userDto.password,salt)
    const user=await this.userRepository.save(userDto)
    
    return user
 }
 
async login(email:string):Promise<User|null>{
   return this.userRepository.findOneBy({email})
}

}

// it is the one which is handleling database Operation for users