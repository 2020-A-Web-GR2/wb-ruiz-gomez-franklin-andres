import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";


@Injectable()
export class  UsuarioService {
    
   constructor( //Inyección de Dependencias
    @InjectRepository(UsuarioEntity)
        private repositorio: Repository<UsuarioEntity>

   ){
       

   }
   crearUno(nuevoUsuario:UsuarioEntity){

    return this.repositorio.save(nuevoUsuario) //promesa

   }
   buscarTodos(){
      return this.repositorio.find()//promesa
   }
   buscarUno(id: number){
      return this.repositorio.findOneOrFail(id)
   }
   editarUno(usuarioEditado: UsuarioEntity){
      return this.repositorio.save(usuarioEditado);
   }
   eliminarUno(id: number) {
      return this.repositorio.delete(id);
  }
}