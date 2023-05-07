import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString({ message: `La marca debe de ser una cadena de texto`})
    readonly brand: string;

    @IsString({ message: `El modelo debe de ser una cadena de texto`})
    readonly model: string;
}