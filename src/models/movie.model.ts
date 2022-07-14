import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class MovieModel {
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: 'O ID é utilizado para identificar individualmente cada filme',
        example: '01',
    })
    id: number;

    @Column({length: 120})
    @ApiProperty({
        description: 'O código é utilizado para filtrar filmes',
        example: 'FILM001',
    })
    codigo: string;

    @Column({length: 255})
    @ApiProperty({
        description: 'O nome é utilizado para exibir dados no catálogo',
        example: 'Os Vingadores: Ultimato',
    })
    nome: string;

    @Column({length: 255})
    @ApiProperty({
        description: 'Gênero de identificação do filme',
        example: 'Ação/Aventura',
    })
    genero: string; 

    @Column('int')
    @ApiProperty({
        description: 'Ano de lançamento do filme',
        example: '2020',
    })
    ano: number;
}