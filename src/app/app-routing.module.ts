import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuariosComponent,
  },
  {
    path: 'prestamos/:id',
    component: PrestamosComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
