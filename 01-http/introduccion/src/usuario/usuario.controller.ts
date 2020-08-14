import { Controller, Get, Post, Delete, HttpCode,Headers, Header, BadRequestException, Param,Query, Body, Req, Res ,Put, InternalServerErrorException } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioController{
   

    public arregloUsuario = [
        {
            id:1,
            nombre:'Andres'
        },
        {
            id:2,
            nombre:'Poleth'

        },
        {
            id:3,
            nombre:'Cris'

        }
        
    ]
    public contActual = 3;
    constructor(//inyeccion de dependencia
        private readonly _usuarioService: UsuarioService){
            
        }
   
    @Post()
    async crearUno(
        @Body() parametrosCuerpo
    ){
        try{
            console.log('okay')
            //validación de DTO
            const  respuesta  = await this._usuarioService.crearUno(parametrosCuerpo);
            return respuesta;
        }catch(e){
            console.error(e)
            throw new BadRequestException( {
                mensaje: 'Error validando datos'
            } );
        }
    }
    @Get()
    async mostrarTodos(){
        try{
            
            return await this._usuarioService.buscarTodos();

        }catch(e){
            console.error(e)
            throw  new InternalServerErrorException({
                mensaje:  'Error del servidor'
            })
        }
    }
    @Get(':id')
    async verUno(
        @Param() parametrosRuta
    ){
        try{
            
            return await this._usuarioService.buscarUno(Number(parametrosRuta.id));

        }catch(e){
            console.error(e)
            throw  new InternalServerErrorException({
                mensaje:  'Error del servidor'
            })
        }
    }
    @Put(':id')
    async editarUno(
        @Param() parametrosRuta,
        @Body() parametrosCuerpo
    ){
        const id =Number(parametrosRuta.id);
        const usuarioEditado= parametrosCuerpo;
        usuarioEditado.id=id;
        try{
           
            return   await this._usuarioService.editarUno(usuarioEditado);
        }catch(e){
            console.error(e);
            throw new InternalServerErrorException({
                mensaje:'Error del servidor'
            })
        }
      
       
    }
   
   
    @Delete(':id')
    async eliminarUno(
        @Param() parametrosRuta,
    ){
        const id =Number(parametrosRuta.id);
    
        try{
           const respuesta = await this._usuarioService.eliminarUno(id);

            return {
                mensaje: 'Registro con id '+ id +' eliminado'
            };
        }catch(e){
            console.error(e);
            throw new InternalServerErrorException({
                mensaje:'Error del servidor'
            })
        }
    }

    //XML <usuario><nombre>ANDRES</nombre></usuario> //notese la cantidad de caracteres
    //JSON {"nombre":"ANDRES"}  //mas eficiente en el numero de caracteres
    //RESTful-JSON
    //ver todos 
    // http://localhost:3001/
    //RESTful MASCOTA
    //ver todos 
    //GET  http://localhost:3001/mascota
    //ver uno
    //GET  http://localhost:3001/mascota/1
    //CREAR UNO
    //POST http://localhost:3001/mascota (BODY)
    //EDITAR UNO
    //PUT http://localhost:3001/mascota/1 (BODY)
    //ELIMINAR UNO
    //DELETE http://localhost:3001/mascota/1
    
///////////////////////RELACIONES//////////////////
//Usuario->Mascotas
//Mascota-> Vacunas

}