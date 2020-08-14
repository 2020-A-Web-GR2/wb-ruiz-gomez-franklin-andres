import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  //importar cosas en TS
const cookieParser = require('cookie-parser');//Importar cosas en JS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Esperando por el puerto 3001');
  //todas las configuraciones extras estan aqui arriba;
  app.use(cookieParser('ANDRES'))
  await app.listen(3001);
}
bootstrap();
