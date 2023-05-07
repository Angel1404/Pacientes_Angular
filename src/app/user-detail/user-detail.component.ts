import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoriaModel } from '../service/models/categoria_models';
import { IDietaModel } from '../service/models/dieta_models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  //Aqui se mandan a llamar las librerias o metodos a utilizar 
  //HttpClient : para las llamadas apis.
  //ActivatedRoute: para recibir los parametros o querys de la url.
  //Router: Para la navegacion.
  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router){};

  //((Estado inicial de la pagina como si fuera el initState de flutter ))
   ngOnInit(){ 
    this.estaturaUser = this.route.snapshot.queryParams['estatura']; //Se toma el dato de la estatura que se mando desde la pantalla principal como querys paramts
    this.pesoUser = this.route.snapshot.queryParams['peso'];
    
    this.getDataCategorias(); //Se manda a llamar las categorias para mostar los detalles del user
  }

  categorias : any ;
  dietas : any ;

  planDietarios: IDietaModel[]  = [];
  selectCategoria : any ;

  estaturaUser : any ;
  pesoUser : any ;


  
 //Metodo para hacer la llamada de la api de categorias y dieta
  getDataCategorias() {
    return this.http.get<[ICategoriaModel]>( 'http://localhost:3001/Categorias' ).subscribe(( res: ICategoriaModel[] ) =>{
    this.categorias = res; //Asiganamos la respuesta de la api a nuestra variable local

    const result =  this.calcularIMCPasciente(); //Mandamos a calcular el IMC del user por los datos de la estatura y peso que se tomaron por querys
  for (let index = 0; index < this.categorias.length; index++) { //Se hace un for para recorrer la lista de categorias
    const categoria = this.categorias[index];
    if(categoria.estado == result){ // Se verifica que el estado de la categoria coindica con el IMC calculado
      this.selectCategoria = categoria; //Se almacena la categoria que coincidio 
    }
  }
    this.getDataDietas(); //Se manda a llamar las dietas resultantes de la categoria. y se hace el mismo proceso q en cateegoria

    });
  };

getDataDietas() {
    return this.http.get<[IDietaModel]>( 'http://localhost:3002/Dieta' ).subscribe(( res: IDietaModel[] ) =>{
      this.dietas = res;
    console.log('DIETAS : ' + res);
  for (let index = 0; index < this.dietas.length; index++) {
    const dieta = this.dietas[index];
    if(dieta.categoria == this.selectCategoria.codigo){
      this.planDietarios.push(dieta); //Aqui se añade a la lista la dieta que coincida con el id de la categoria.
    }
  }
    });
  };


  //Calculo del IMC
  calcularIMCPasciente() : String {

      const alturaCm = this.estaturaUser / 100;
      
       const  imc = this.pesoUser / Math.pow(alturaCm,2);

      if(imc < 18.5){
        return 'Peso bajo';
      }

      if(imc > 18.5 && imc <= 24.9){
        return 'Ideal';
      }

      if(imc > 25.0 && imc <= 29.9){
        return'Sobre Peso';
      }
      if(imc > 29.9 && imc <= 34.9){
        return'Obesidad';
      }
      if(imc > 35 && imc <= 39.9){
        return 'Obesidad Severa';
      }
      return 'Obesidad Morbida';
  }

  //Metodo para regresar a la pantalla anterior
  back(){
    this.router.navigate(['/pascientes']);

  }

}
