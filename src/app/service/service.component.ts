import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServiceModels } from './models/service.models';
import { IPascienteModel } from './models/pasciente.models';
// import { IServiceModels } from './models/service.models';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(private http : HttpClient){};

  // ngOnInit(){ ((Estado inicial de la pagina como si fuera el initState de flutter ))

   
   
  // }

  user : any ;
  pasciente : any ;


  
  getUser() {
    return this.http.get<IServiceModels>( 'https://jsonplaceholder.typicode.com/posts' ).subscribe(( res ) =>{
  
    this.user = res;

    });
  };
getPasciente() {
    return this.http.get<IPascienteModel>( 'http://localhost:3000/data' ).subscribe(( res ) =>{
    this.pasciente = res;

    });
  };


//  editUser() {
//     return this.http.get<IServiceModels>( 'https://jsonplaceholder.typicode.com/posts' ).subscribe(( res ) =>{
  
//     this.user = res;

//     });
//   };

}




