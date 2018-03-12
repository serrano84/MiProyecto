import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes en CLI';

  link1 = 'https://angular.io/tutorial';
  link2 = 'https://github.com/angular/angular-cli/wiki';
  link3 = 'https://blog.angular.io/';

 constructor() { }

  cambiar(){
	  console.log('llego a la funcion');
  }


}
