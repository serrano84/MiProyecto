import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  lado = 4;

  preguntas : string[] = [

     'Animal favorito?',
	 'Apellido Paterno?',
	 'Nombre de tu secundaria?',
	 'Pelicula Favorita?'
  ];



  preguntasObj: Objetos[] = [
  {nombre: 'Luis', apellidoPaterno: 'Serrano', edad: 29},
  {nombre: 'Juanelo', apellidoPaterno: 'Cosmico', edad: 32},
  {nombre: 'Pedro', apellidoPaterno: 'Infante', edad: 60},
  {nombre: 'Petronilo', apellidoPaterno: 'Cespedes', edad: 45}
  ];


  constructor() { }

  ngOnInit() {
	  console.log("Carga componente de listas");
  }


}

interface Objetos{
 nombre : string;
 apellidoPaterno: string;
 edad: number;
};
