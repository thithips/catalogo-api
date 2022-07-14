import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './modules/movie.module';


@Module({
  imports: [MovieModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './db.sql',
    entities: ["dist/**/*.model.js"],
    synchronize: true,

    
}),
],
})
export class AppModule {}
