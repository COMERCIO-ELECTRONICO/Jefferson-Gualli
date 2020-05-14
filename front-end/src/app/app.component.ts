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
  imagenPadre = 'https://lh3.googleusercontent.com/proxy/8ngcZ0cZg5O0HP2JiO02FKYFfzU-cm4Qmyj2OouM31b230f78aut51Smna6oUlpsSqsxB9_yZs8sO6hMMtpi7ZXvpADKS5h1dkcKIPSZd3w2zvS3XeFmSQr8gwOYJTL7vkyV';
obtenerRespuestaHijo(evento){
  console.log(evento)
}
}
