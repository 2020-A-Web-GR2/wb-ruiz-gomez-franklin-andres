import { Controller, Get, Post, Delete, HttpCode,Headers, Header, BadRequestException, Param,Query, Body, Req, Res ,Put } from "@nestjs/common";

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
    @Get()
    mostrarTodos(){
        return this.arregloUsuario;
    }
    @Post()
    crearUno(
        @Body() parametrosCuerpo
    ){
        const nuevoUsuario={
            id: this.contActual + 1,
            nombre:parametrosCuerpo.nombre
        }
        this.arregloUsuario.push(nuevoUsuario);
        return nuevoUsuario;
    }
    @Get(':id')
    verUno(
        @Param() parametrosRuta
    ){
        const indice = this.arregloUsuario.findIndex(
            (usuario)=>usuario.id=== Number(parametrosRuta.id)
        )
        return this.arregloUsuario[indice];
    }
    @Put(':id')
    editarUno(
        @Param() parametrosRuta,
        @Body() parametrosCuerpo
    ){
        const indice = this.arregloUsuario.findIndex(
            (usuario)=>usuario.id=== Number(parametrosRuta.id)
        )
        return this.arregloUsuario[indice].nombre = parametrosCuerpo.nombre;
    }
    @Delete(':id')
    eliminarUno(
        @Param() parametrosRuta,
    ){
        const indice = this.arregloUsuario.findIndex(
            (usuario)=>usuario.id=== Number(parametrosRuta.id)
        )
        this.arregloUsuario.splice(indice,1);
        return this.arregloUsuario[indice];
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
    


}