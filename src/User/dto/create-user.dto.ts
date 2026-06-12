import { IsString,IsNotEmpty,IsNumber } from "class-validator";

export class createUserDto{

    @IsNotEmpty()
    @IsString()

    readonly name

    @IsString()
    @IsNotEmpty()
    lastName!:string

     @IsString()
    @IsNotEmpty()
    email!:string

      @IsString()
    @IsNotEmpty()
    password!:string
}