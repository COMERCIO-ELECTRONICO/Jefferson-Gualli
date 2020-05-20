
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';


const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path : 'crear',
    component: CrearComponent

  },
  {
    path: 'editar',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
