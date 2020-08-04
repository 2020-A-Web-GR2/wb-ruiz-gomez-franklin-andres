import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpJuegoModule } from "./http/http-juego.module";
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    //aqui otros modulos
    HttpJuegoModule,
    UsuarioModule,
    ////////////////////////////////////////////////
    //revisar documentación en https://docs.nestjs.com/techniques/database para otras bases de datos esta en //MYSQL
    /////////
    //Caden de conexion
    TypeOrmModule.forRoot({
        name: 'default',//nombre conexion))
        type: 'mysql', // musql postgres
        host: 'localhost', //ip
        port: 3306, //puerto
        username: 'root', //usuario
        password: 'root', // pasword
        database: 'test', // base de datos
        entities: [

            
        ],
        synchronize: true, // actualiza el esquema de la base de datos
        dropSchema: false,  //eliminar datos y el esquema de base de datos
      }),
  ],
  controllers: [
    //controladores del APP MODULE
    AppController],
  providers: [
    //Servicios  APP MODULE
    AppService],
})
export class AppModule {}
