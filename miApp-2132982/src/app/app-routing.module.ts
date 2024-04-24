import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'',
    redirectTo:'/productos',
    pathMatch:'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
