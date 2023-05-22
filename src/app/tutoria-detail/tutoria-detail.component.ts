import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { urlBase } from 'src/utils/urls';
import { TutoriasModels } from '../service/models/tutorias_model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './tutoria-detail.component.html',
  styleUrls: ['./tutoria-detail.component.css']
})
export class TutoriaDetailComponent {
  //Aqui se mandan a llamar las librerias o metodos a utilizar 
  //HttpClient : para las llamadas apis.
  //ActivatedRoute: para recibir los parametros o querys de la url.
  //Router: Para la navegacion.
  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router){};

  //((Estado inicial de la pagina como si fuera el initState de flutter ))
   ngOnInit(){ 
    this.idTutoria = this.route.snapshot.queryParams['idTutoria'];
    
  }
  tutoria : any ; // Aqui se almacena la tutoria que viene del metodo getTutoria y esta variable es la que tiene los datos a mostrar en la vista
  idTutoria : number = 0 ; //Esta solo tiene el id de la tutoria que viene del listado de cada una de ellas

  getTutoria(){
    this.http.get<TutoriasModels>(urlBase + '/Tutorias/'+ this.idTutoria).subscribe((res: TutoriasModels)=>{
      this.tutoria = res;
    });
  }
  deleteTutoria(idTutoria: number){
this.http.delete(urlBase + "Tutorias/" + idTutoria).subscribe(
  (res) =>{
    //Colocar popuo de la tutoria eliminada si la respuesta es Status code 200 {"Response": "Tutoria eliminada"}
  }
);
  }

  //Metodo para regresar a la pantalla anterior
  goTo(){
    const querys = {tutoria : this.idTutoria}; // Se establecen los querys como mapa 

    this.router.navigate(['/editTutoria'],{ queryParams: querys });

  }

}
