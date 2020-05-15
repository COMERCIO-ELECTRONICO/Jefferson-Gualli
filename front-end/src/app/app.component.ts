import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://4.bp.blogspot.com/-7vd35hOm3Vk/WanQ2JNGLhI/AAAAAAAAHNQ/l6pspfvoGrUnxm8t3gYXNqIGJ_dUAIQEACLcBGAs/s1600/Introducci%25C3%25B3n%2Bal%2BComercio%2BElectr%25C3%25B3nico.jpg';

       datosHijo = {
        tituloPadre: 'soy tu padre hola',
        nombreBotonPadre: 'alertar!!!!!!!!',
        imagenPadre: 'https://4.bp.blogspot.com/-7vd35hOm3Vk/WanQ2JNGLhI/AAAAAAAAHNQ/l6pspfvoGrUnxm8t3gYXNqIGJ_dUAIQEACLcBGAs/s1600/Introducci%25C3%25B3n%2Bal%2BComercio%2BElectr%25C3%25B3nico.jpg',
      
       }
  obtenerRespuestaHijo(evento){
  console.log(evento)
}
}
