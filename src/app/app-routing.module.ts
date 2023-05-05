import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
      {
        path:'service', component: ServiceComponent
      },
      {
        path:'detailUser/:id', component: UserDetailComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
