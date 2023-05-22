import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { TutoriaDetailComponent } from './tutoria-detail/tutoria-detail.component';
import { TutoriaEditComponent } from './tutoria-edit/tutoria-edit.component';

//Rutas de la app
const routes: Routes = [
      {
        path:'tutorias', component: ServiceComponent //Ruta principal donde se muetsran todos los pascientes
      },
      {
        path:'detalleTutoria', component: TutoriaDetailComponent //ruta donde se muestra el detalle, como categoria y la dieta
      },
      {
        path:'editTutoria', component: TutoriaEditComponent //ruta donde se muestra el detalle, como categoria y la dieta
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
