import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mi-primer-componete',
  templateUrl: './mi-primer-componete.component.html',
  styleUrls: ['./mi-primer-componete.component.css']
})
export class MiPrimerComponeteComponent implements OnInit {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Output() saludoHijo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  SALUDAR() {
    alert('holaaaaaa');
    this.saludoHijo.emit('salud de tu Hijo');
  }

}