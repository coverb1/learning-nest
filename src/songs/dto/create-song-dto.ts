import { IsDateString, IsMilitaryTime, isNotEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator"


export class createSongsDTO{

    @IsString()
    @IsNotEmpty()
    readonly tittle!:string;

   @IsOptional()
    readonly artists?:number[]

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate!:string

    
    @IsNotEmpty()
    readonly duration!:string
}