import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { urlBase } from 'src/utils/urls';

@Component({
  selector: 'app-create-tutoria',
  templateUrl: './create-tutoria.component.html',
  styleUrls: ['./create-tutoria.component.css']
})
export class CreateTutoriaComponent {


  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router){};

  createTutoria(){

    this.http.post(urlBase + 'crearTutoria',{
      "id_tutoria": "1", 
      "id_estudiante": "idEstudiante", // por defecto 1
      "id_tutor": "idTutor", //Por defecto 1
      "id_asignatura": "idAsignatura", // por defecto 1
      "tema": "tema",
      "fecha": "fecha",
      "duracion": "duracion", //En minutos
      "comentario": "comentario",
      "estado": "estado", // 0 inactivo, 1 activo
    }).subscribe((res)=>{
// Poner un popUp al salir exitosa la cracion
//{"Response": "Tutoria Creada"}
//Status code 201
//ERR Status code 500
    });
  }

   //Metodo para navegar as la pantalla del detalle de la tutoria despues de haberla editado
  pushTutoria(){ //Se piden por parametros los datos que necesitamos en la otra pantalla
    this.router.navigate(['/tutorias']); //Se navega con esta funcion a la otra pantalla, mandandole los datos por querys paramts.
  }

}
