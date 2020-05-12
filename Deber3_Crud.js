// usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
// - callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
// - callback editar un usuario
// - callback eliminar un usuario
// - callback listar usuario

///LISTA-USUARIO///
  


var DatosUsuario = ['Jefferson', '22', '16/07/1997', '0992247420'] 

function listaUsuario(array, cb) {
    array
    .forEach (
    usuario => {
    console.log(usuario);
    });
    cb({
      mensaje: "USUARIOS REGISTRADOS",
    });
  }
  
  listaUsuario(DatosUsuario, (respuestaMensaje) => {
  
    console.log(respuestaMensaje);
  });
///REGISTRAR-USUARIO/// 

function RegistrarUsuario(DatosUsuario,nombre,edad,fechaNacimiento,telf,cb){
   DatosUsuario.push(nombre)  
    DatosUsuario.push(edad)  
    DatosUsuario.push(fechaNacimiento)  
    DatosUsuario.push(telf)  
    cb(
        {
        mensaje: 'USUARIO REGRITRADO CORRECTAMENTE',
        
    }
    )
}

var indice = DatosUsuario.indexOf("Jefferson");
if(indice !== -1){
  console.log("EL USUARIO YA SE ENCUENTRA REGISTRADO");
  
}
   

 ///EDITAR-USUARIO///
 function EditarUsuario(DatosUsuario,nombre,edad,fechaNacimiento,telf,i,i2,i3,i4,cb) {

    DatosUsuario[i] = nombre
    DatosUsuario[i2] = edad
    DatosUsuario[i3] = fechaNacimiento
    DatosUsuario[i4] = telf
  
    cb({
      mensaje: "USUARIO EDITADO CORRECTAMENTE",
      DatosUsuario,
    });
  }
 EditarUsuario(DatosUsuario, "sebastian",'21','2/01/1999','0997856772'                                                                                                   ,0,1,2,3,
  (respuestaMensaje) => {
    console.log('--- USUARIO-EDITADO ---')
    console.log(respuestaMensaje);
  });
  //ELIMINAR-USUARIO
  function EliminarUsuario(DatosUsuario,nombre,edad,fechaNacimiento,telf,i,i2,i3,i4) {

    DatosUsuario[i] = nombre
    DatosUsuario[i2] = edad
    DatosUsuario[i3] = fechaNacimiento
    DatosUsuario[i4] = telf
    
    }
  
    EliminarUsuario(DatosUsuario, '','','','',0,1,2,3, )
      console.log('--- USUARIO-ELIMINARO ---')
        console.log("DatosUsuario-VACIO: ");
        console.log(DatosUsuario);

 
