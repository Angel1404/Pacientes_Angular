import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPascienteModel } from '../service/models/pasciente.models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private http : HttpClient, private route: ActivatedRoute){};

  //((Estado inicial de la pagina como si fuera el initState de flutter ))
   ngOnInit(){ 
    this.getPasciente();
  }

  pasciente : any ;
  selectPasciente : any ;
  id:any;
  imcResult: String = '';
  imc: number = 0.0;


  
getPasciente() {
  this.id = this.route.snapshot.paramMap.get('id');
    return this.http.get<[IPascienteModel]>( 'http://localhost:3000/data' ).subscribe(( res: IPascienteModel[] ) =>{
    this.pasciente = res;
  for (let index = 0; index < this.pasciente.length; index++) {
    const element = this.pasciente[index].id;
    if(element == this.id){
      this.selectPasciente = this.pasciente[index];
    }
  }

  this.calculateImc();

    });
  };

  calculateImc(){

      const alturaCm = this.selectPasciente.estatura / 100;
      
       this.imc = this.selectPasciente.peso / Math.pow(alturaCm,2);

      if(this.imc < 18.5){
        this.imcResult = 'Peso suficiente';
      return;
      }

      if(this.imc > 18.5 && this.imc <= 24.9){
        this.imcResult = 'Saludable';
      return;
      }

      if(this.imc > 25.0 && this.imc <= 29.9){
        this.imcResult = 'Sobre peso';
        return;
      }

      this.imcResult= 'Obesidad';
      return;
  }

}
