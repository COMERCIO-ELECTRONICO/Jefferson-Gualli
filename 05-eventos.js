/// --- Eventos --- ///
//java requiere un paquete para usar eventos
const EventEmiter =require('events')

class entrarALaCasa extends EventEmiter { }

const entrarCasa = new entrarALaCasa
var nombreEvento = 'entrar por la puerta de adelante'
//evento que escucha
//ON
 entrarCasa.on(nombreEvento, (nombre)=>{
     console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
 })

 //evento que emite
//EMIT

entrarCasa.emit(nombreEvento, 'Jefferson')




























