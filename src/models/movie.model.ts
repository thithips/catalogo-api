import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    codigo: string;

    @Column({length: 255})
    nome: string;

    @Column({length: 255})
    genero: string; 

    @Column('int')
    ano: number;
}