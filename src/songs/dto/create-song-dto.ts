import { IsDateString, IsMilitaryTime, isNotEmpty, IsNotEmpty, IsString } from "class-validator"


export class createSongsDTO{

    @IsString()
    @IsNotEmpty()
    readonly tittle!:string;

    @IsNotEmpty()
    @IsNotEmpty()
    @IsString()
    readonly artists!:string[]

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate!:Date

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration!:Date
}