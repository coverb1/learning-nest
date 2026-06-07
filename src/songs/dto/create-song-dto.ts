import { IsDateString, IsMilitaryTime, isNotEmpty, IsNotEmpty, IsString } from "class-validator"


export class createSongsDTO{

    @IsString()
    @IsNotEmpty()
    readonly tittle!:string;

    @IsNotEmpty()
    readonly artists!:number[]

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate!:Date

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration!:Date
}