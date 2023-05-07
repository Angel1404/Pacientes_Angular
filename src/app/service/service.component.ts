import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPascienteModel } from './models/pasciente.models';
import { Router } from '@angular/router';
// import { IServiceModels } from './models/service.models';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private http : HttpClient, private router: Router){};

  ngOnInit(){  //((Estado inicial de la pagina como si fuera el initState de flutter ))

   this.getPasciente(); // Se manda a llamar a lo que entra a la pagina
   
  }

  user : any ;
  pascientes : any;

//Peticion a la api de pascientes
  getPasciente() {
    return this.http.get<IPascienteModel[]>( 'http://localhost:3000/Pacientes' ).subscribe(( res: IPascienteModel[] ) =>{
    this.pascientes = res;

    });
  };

  //Metodo para navegar as la pantalla de detail
  pushDetailPasciente(estatura : number, peso:number  ){ //Se piden por parametros los datos que necesitamos en la otra pantalla
    const querys = {estatura : estatura, peso : peso}; // Se establecen los querys como mapa 
    this.router.navigate(['/detallePasciente'], { queryParams: querys }); //Se navega con esta funcion a la otra pantalla, mandandole los datos por querys paramts.
  }

}




