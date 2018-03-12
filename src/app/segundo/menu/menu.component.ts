import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
  texto: string = 'SI';
  estadoPositivo: boolean = true;
  
  cambiaEstado(){
	
   this.texto = (this.estadoPositivo)? 'NO':'SI';
   this.estadoPositivo = !this.estadoPositivo; 
	  
  }
	
  constructor() { }

  ngOnInit() {
	  console.log('se ha cargado el componente del segundo modulo');
  }

}
