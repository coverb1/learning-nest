import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { userClassService } from './user.service';
import { User } from './user.entity';

@Controller ('User')

export class userClassController{
   constructor(private userService:userClassService){}

   @Post()
    create (@Body() userDto:createUserDto):Promise<User>{
        return this.userService.create(userDto)
    }
}