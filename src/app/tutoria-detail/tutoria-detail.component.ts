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
  tutoria : any ;
  idTutoria : String = '' ;

  getTutoria(){
    this.http.get<TutoriasModels>(urlBase + '/Tutorias/'+ this.idTutoria).subscribe((res: TutoriasModels)=>{
      this.tutoria = res;
    });
  }

  //Metodo para regresar a la pantalla anterior
  goTo(){
    const querys = {tutoria : this.tutoria}; // Se establecen los querys como mapa 

    this.router.navigate(['/editTutoria'],{ queryParams: querys });

  }

}
