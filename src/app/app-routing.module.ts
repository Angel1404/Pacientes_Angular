import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

//Rutas de la app
const routes: Routes = [
      {
        path:'pascientes', component: ServiceComponent //Ruta principal donde se muetsran todos los pascientes
      },
      {
        path:'detallePasciente', component: UserDetailComponent //ruta donde se muestra el detalle, como categoria y la dieta
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
