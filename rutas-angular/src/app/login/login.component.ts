import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
// email = '';
// contrasena = '';
nombre = '';
apellido = '';
telefono = '';
email = '';
contrasena = '';
password = '';
password2 = '';
validador:boolean=false
  ngOnInit(): void {
  }
validar(){
  if (this.password==this.password2){
    this.validador=true
  }
}
  obtenerFormulario(formulario) {
    console.log(formulario);
    alert(
      'Nombre: ' +
      formulario.controls.nombre.value +
      ' Apellido: ' +
      formulario.controls.apellido.value +
      ' Telefono: ' +
      formulario.controls.telefono.value +
      ' Email: ' +
      formulario.controls.email.value +
      ' Password: ' +
      formulario.controls.password.value
  );
}
}
