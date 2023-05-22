import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TutoriasModels } from './models/tutorias_model';
import { urlBase } from 'src/utils/urls';
// import { IServiceModels } from './models/service.models';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private http : HttpClient, private router: Router){};

  ngOnInit(){  //((Estado inicial de la pagina como si fuera el initState de flutter ))

   this.getTutorias(); // Se manda a llamar a lo que entra a la pagina
   
  }

  tutorias : any;

//Peticion a la api de tutorias
  getTutorias() {
    const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
  "Access-Control-Allow-Headers": "*"
};
    return this.http.get<TutoriasModels[]>(urlBase + '/Tutorias/', {
      headers: headers
    } ).subscribe(( res: TutoriasModels[] ) =>{
    this.tutorias = res;
    });
  };

  //Metodo para navegar as la pantalla de detail
  pushDetailPasciente(id: String  ){ //Se piden por parametros los datos que necesitamos en la otra pantalla
    const querys = {idTutoria : id}; // Se establecen los querys como mapa 
    this.router.navigate(['/detalleTutoria'], { queryParams: querys }); //Se navega con esta funcion a la otra pantalla, mandandole los datos por querys paramts.
  }

}




