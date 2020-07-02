import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Esperando por el puerto 3000');
  //todas las configuraciones extras estan aqui arriba;
  await app.listen(3001);
}
bootstrap();
