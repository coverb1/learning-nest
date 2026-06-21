import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SeedsService } from './seeds/seeds.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // ✅ Seed before listening
  const seedService = app.get(SeedsService);
  await seedService.seed();

  // ✅ Listen only once
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();