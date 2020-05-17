import { Component, OnInit,
   Input, Output,
    EventEmitter , 
    OnDestroy} from '@angular/core';


@Component({
  selector: 'app-mi-primer-componete',
  templateUrl: './mi-primer-componete.component.html',
  styleUrls: ['./mi-primer-componete.component.css']
})
export class MiPrimerComponeteComponent implements OnInit, OnDestroy {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Output() datos:object;

  @Output() saludoHijo = new EventEmitter();

  fecha = new Date();
  sueldo: number= 3.687;
  nombre: string ='jefferson';
  
  constructor() { }

  ngOnInit() {
    console.log('datos de padre en hijo')
    console.log(this.datos)
  }

  ngOnDestroy() {

  }

  SALUDAR() {
    alert('holaaaaaa');
    this.saludoHijo.emit('salud de tu Hijo');
  }

}