import { IsArray,IsNotEmpty,IsNumber,IsString } from "class-validator";

export class creatPlayListDto{
    @IsString()
    @IsNotEmpty()
    readonly name;

    @IsString()
    @IsArray()
    @IsNumber({},{each:true})
    readonly songs

    @IsNumber()
    @IsNotEmpty()
    readonly user!:number
   
    
}