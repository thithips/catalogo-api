import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { MovieModel } from "src/models/movie.model";
import { MovieSchema } from "src/schemas/movie.schema";
import { Repository } from "typeorm";

@Controller('/movie')
export class MovieController {
    constructor(@InjectRepository(MovieModel) private model: Repository<MovieModel>) {}
    @Post()
    public async create(@Body() body: MovieSchema): Promise<MovieModel> {
        
        return this.model.save(body);;
    }
    @Get(':id')
    public async getOne(@Param('id', ParseIntPipe) id: number): Promise<MovieModel> {
        const movie = await this.model.findOne({ where: {id }});
        if(!movie) {
            throw new NotFoundException(`Não há filme cadastrado com o id ${id}`);
        }
        return movie;
    }
    @Get()
    public async getAll(): Promise<MovieModel[]> {
        return this.model.find();
    }
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() body:MovieSchema): Promise<MovieModel> {
        const movie = await this.model.findOne({ where: { id }});
        if(!movie) {
            throw new NotFoundException(`Não há filme cadastrado com o id ${id}`);
        }

        await this.model.update({ id }, body);
        return this.model.findOne({ where: { id }});
    }
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const movie = await this.model.findOne({ where: { id }});
        if(!movie) {
            throw new NotFoundException(`Não há filme cadastrado com o id ${id}`);
        }

        await this.model.delete(id);
        return  `O filme com o id ${id} foi deletado com sucesso!`;
    }
}