import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datosLista : any = [{
      nombre : 'michell',
      apellido : 'quispe',
      carrera : 'desarrollador'
  },
  {
    nombre : 'yuly',
    apellido : 'cuya',
    carrera : 'odontologa'
  }
];  

registrarDato(nombre:string, apellido:string, carrera:string){

  if(nombre.length && apellido.length && carrera.length ){
    this.datosLista.push({
      nombre,apellido,carrera
    });
    
  }else{
    alert('[ ERROR ] DEBE LLENAR TODOS LOS CAMPOS');
  }
}
  eliminarFila(index: number){

    if (confirm("¿Está seguro de que desea eliminar este registro?")) {
        this.datosLista.splice(index, 1);
    }
  }
}