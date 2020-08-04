import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from "./usuario.entity";



//@Nombre() -> Decorador
@Module({
    imports:[
        TypeOrmModule.forFeature(

            [
                UsuarioEntity

            ],
            'default' //nombre cadena de conexión
        )
    ],
    controllers:[
        UsuarioController
    ],
    providers:[
        UsuarioService
       
    ],
})
export class UsuarioModule{

}