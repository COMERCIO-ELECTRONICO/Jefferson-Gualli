import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //credenciales
  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Jefferson', 'David', 'Gualli'];
  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,
    private readonly _localStorage: Storage
  ) {}

  ngOnInit(): void {
    this._loginService
    .metodoGet('http://localhost:1337/usuario')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });


  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Jefferson', 'David', 'Gualli'];
    }
    /*this.sugerencias
    = ['hola'];*/
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }
info(){
  ['./usuario/usuario.module']
}
  ingresar() {
    console.log('guardar')
    this._localStorage
    .setItem(
      'nombre', 
      JSON.stringify({nombre: 'jefferson'})
      );
    this._loginService
    .metodoPost(
      'http://localhost:1337/usuario',
      {
        nombre: "Jefferson",
        edad: this.pass,
        correo: this.correo,
        esCasado: true
      }
      )
    .subscribe(
      (resultadoPost)=>{
        console.log('Respuest de Post');
        console.log(resultadoPost);
      }
    )
 //  console.log(this.valorAutocomplete);

    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'Jefferson') {
        alert('es estudiante');
        this._router.navigate(
          ['/estudiante','perfil']
        )
      }
      if (this.seleccionadoValor === 'David') {
        alert('es profesor');
        this._router.navigate(
          ['/profesor','perfil']
        )
      }
    } else {
      alert('no ingreso');
    }
    
  }
  eliminarRegitroPorId(){
    this._loginService
    .metodoDelete('http://localhost:1337/usuario/2').subscribe(
      (respuestDelete)=>{
        console.log(' repuesta de delete');
        console.log(respuestDelete);
      }
    )
  }

}
