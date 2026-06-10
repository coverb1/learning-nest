import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString
} from "class-validator";

export class UpdateSOngDto {

  @IsOptional()
  @IsString()
  readonly tittle?: string;

  @IsOptional()
  @IsArray()
  readonly artists?: number[];

  @IsOptional()
  @IsDateString()
  readonly releaseDate?: string;

  @IsOptional()
  @IsString()
  readonly duration?: string;
}