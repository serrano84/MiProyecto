import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {

	  console.log(this.clientesService);

  }

}
