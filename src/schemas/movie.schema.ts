import { IsString, IsInt, MinLength, MaxLength} from 'class-validator';
export class MovieSchema {
    @IsString()
    @MaxLength(120)
    @MinLength(7)
    codigo: string;

    @IsString()
    @MaxLength(255)
    @MinLength(2)
    nome: string;

    @IsString()
    @MaxLength(255)
    @MinLength(4)
    genero: string; 

    ano: number;
}