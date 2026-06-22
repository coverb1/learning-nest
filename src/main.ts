import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SeedsService } from './seeds/seeds.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//configuration for swagger
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config=new DocumentBuilder()
  .setTitle('spotifyclone')
  .setDescription(' the spotify clone please')
  .setVersion('1,0')
  .addBearerAuth({
    type:'http',
    scheme:'bearer',
    bearerFormat:'JWT',
    name:'JWT',
    description:'enter JWT token',
    in:'header'
  })
.build();

const document=SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document)

  // ✅ Seed before listening
  const seedService = app.get(SeedsService);
  await seedService.seed();

  // ✅ Listen only once
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();