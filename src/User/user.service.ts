import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { createUserDto } from "./dto/create-user.dto";

@Injectable()

export class userClassService{
    constructor(
       @InjectRepository(User)
       private UserRepo:Repository<User>
    ){}

    async create(userDto:createUserDto):Promise<User>{

        const user =new User
        user.name=userDto.name
      const savedUser = await this.UserRepo.save(user)
        console.log(user)
        return savedUser
    }
}