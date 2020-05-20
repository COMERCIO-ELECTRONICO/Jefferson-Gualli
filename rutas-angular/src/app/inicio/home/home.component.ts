import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id: number;
  constructor(
    private reandonly_router: Router,
    private readonly_AactivateRoute: ActivatedRoute
  ) { } 

  ngOnInit(): void {
    // observable son asyn
    this.readonly_AactivateRoute
    .params
    .subscribe(
      (resultado)=>{
        console.log("resultado obsrevable")
        console.log(resultado)
        this.id = resultado.id;
        console.log("valor de id" , this.id)
      },
      (error) =>{
        console.error(error);
      }    );
  }

irAUsuarioListar(){
this.reandonly_router.navigate(['/usuario', 'listar']);
}
}
