import { IsString,IsNotEmpty,IsNumber } from "class-validator";

export class createUserDto{

    @IsNotEmpty()
    @IsString()

    readonly name
}