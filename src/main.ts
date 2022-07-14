import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  app.useGlobalPipes(new ValidationPipe);
  app.useGlobalInterceptors(new TransformInterceptor());
}

bootstrap();
