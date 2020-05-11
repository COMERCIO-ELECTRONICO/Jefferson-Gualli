//api, rest Api : comunicacion entre diferentes aplicaciones
// programacion funcional: hacemos una funcion y como parametro hacemos otra funcion
/*function programacionFuncional(nuemro1, ()=>{}, 1){

}*/

// callbacks
/*
function primeraFuncion() {
    setTimeout(
        ()=>{
            console.log('primera')
        },500
    )
   
}
function segundaFuncion(){
    console.log('2')
}

function saluda(nombre, callback) {
    console.log('saludo a: ', nombre)
    callback()
}
function funcionCallback(nombre, callback){
  
    console.log('ya salude')

}
saluda('Jefferson', () =>{
    console.log('saludaste')
}) */


/* function saludar(nombre){
    console.log(`ejecuto saludo a: ${nombre}`)
    return nombre
}
 function peticionUsuario(nombre, callback){
     callback(nombre)
 }

 peticionUsuario('Jeffeson',saludar)

 peticionUsuario('Jeffeson',(saludar) =>{
console.log(saludar);
 })  */

 /*var arreglo = ['juan', 'juan', 'juan']
var nombreNuevo = 'juan'
function anadirNombre(arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice] = nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'Jefferson', 2, (mensaje) => {
    console.log(mensaje);
});*/
 
/* var arregloUsuario = [1, 2, 3, 4, 5]
function listarUsuario(arreglo, cb){
    arreglo
    .forEach(
        usuario => {
        console.log(usuario);
        });
   cb({
       mensaje: 'lista de usuario'
   });
}
listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
}) */


//null: var numero =  0; esta vacio
//undefined var num, numero ; si la variable no esta definida nos sale undefine
// === : verifica si es el mismo conteido y el mismo tipo de dato ej: '1' === '1'
// ==  : verifica el contenido pero no esl tipo de datoeje:   1 == '1'

// PROGRAMACIÓN ASINCRONA : cierta parte de codigo se va ha ejecutar no secuencialmente
// ej: que una funcion se ejecute una funcion antes que otra o despues que otra : callbakcs
// PROGRAMACIÓN SINCRONA; se ejecutan al final de todo en orden


// npm install nombrePaquete
// npm install nombrePaquete@1.23
// npm install nombrePaquete@latest































