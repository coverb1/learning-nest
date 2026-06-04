import { IsArray,IsNotEmpty,IsNumber,IsString } from "class-validator";

export class creatPlayListDto{
    @IsString()
    @IsNotEmpty()
    readonly name;

   
    
}