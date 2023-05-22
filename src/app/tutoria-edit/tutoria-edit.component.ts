import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { urlBase } from 'src/utils/urls';

@Component({
  selector: 'app-user-detail',
  templateUrl: './tutoria-edit.component.html',
  styleUrls: ['./tutoria-edit.component.css']
})
export class TutoriaEditComponent {
  //Aqui se mandan a llamar las librerias o metodos a utilizar 
  //HttpClient : para las llamadas apis.
  //ActivatedRoute: para recibir los parametros o querys de la url.
  //Router: Para la navegacion.
  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router){};

  //((Estado inicial de la pagina como si fuera el initState de flutter ))
   ngOnInit(){ 
    this.tutoria = this.route.snapshot.queryParams['tutoria'];
  }

    tutoria : any;

editTutoria(idTutoria: number){

  this.http.put(urlBase + '/Tutorias/' + idTutoria,{
    "tema": "",//Variable con el valor del tema a cambiar, si no hay datos a cambiar, se manda el mismo tema que hay
    "fecha": "" ,//String en formato DateTime (2023-05-19 21:47:22.133082Z)
    "duration":"",
    "comentario":"", 
  }).subscribe((res)=>{
    //Hacer la respuesta mostar popUp de tutoria editada
    //REsponse que viene : {"Response": "Tutoria actualizada"}
  });

}
  //Metodo para navegar as la pantalla del detalle de la tutoria despues de haberla editado
  pushDetailTutoria( idTutoria: number){ //Se piden por parametros los datos que necesitamos en la otra pantalla
    const querys = {idTutoria : idTutoria}; // Se establecen los querys como mapa 
    this.router.navigate(['/detalleTutoria'], {queryParams: querys}); //Se navega con esta funcion a la otra pantalla, mandandole los datos por querys paramts.
  }

  }
