import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  await app.listen(configService.get("PORT"));
  console.log(`Server is running on the port : ${configService.get('PORT')}`);
}

bootstrap();