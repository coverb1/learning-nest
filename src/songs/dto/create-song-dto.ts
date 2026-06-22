import { IsDateString, IsMilitaryTime, isNotEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ApiProperty,ApiPropertyOptional } from "@nestjs/swagger";

export class createSongsDTO{


      @ApiProperty({
    example: "Calm Down",
    description: "Title of the song"
  })
    @IsString()
    @IsNotEmpty()
    readonly tittle!:string;

      @ApiPropertyOptional({
    example: ["Rema", "Selena Gomez"],
    description: "List of artists"
  })
   @IsOptional()
    readonly artists?:string[]
    
      @ApiProperty({
    example: "2024-01-01",
    description: "Release date of the song"
  })
    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate!:string

      @ApiProperty({
    example: "03:45",
    description: "Duration of the song (MM:SS)"
  })
    @IsNotEmpty()
    readonly duration!:string
}