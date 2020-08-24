import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssuntosListagemComponent } from './assuntos-listagem/assuntos-listagem.component';
import { AssuntosCadastroComponent } from './assuntos-cadastro/assuntos-cadastro.component';
import { AssuntosRoutingModule } from './assuntos-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [AssuntosListagemComponent, AssuntosCadastroComponent],
    imports: [
        CommonModule,
        AssuntosRoutingModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule
    ]
})
export class AssuntosModule { }
