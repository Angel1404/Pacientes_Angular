import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { TutoriaDetailComponent } from './tutoria-detail/tutoria-detail.component';
import { CreateTutoriaComponent } from './create-tutoria/create-tutoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    TutoriaDetailComponent,
    CreateTutoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
