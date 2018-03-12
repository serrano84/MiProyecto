import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegundoComponent } from './segundo.component';
import { MenuComponent } from './menu/menu.component';
import { ListasComponent } from './listas/listas.component';
import { ModelComponent } from './model/model.component';

import { FormsModule } from '@angular/forms';

import { ClientesService } from './clientes.service';




@NgModule({
  imports: [
    CommonModule,
	FormsModule
  ],
  declarations: [MenuComponent, ListasComponent, SegundoComponent, ModelComponent],
  exports: [MenuComponent,ListasComponent,SegundoComponent,ModelComponent],
  providers:[ClientesService]


})
export class SegundoModule { }
