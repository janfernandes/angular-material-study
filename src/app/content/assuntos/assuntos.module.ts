import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssuntosListagemComponent} from './assuntos-listagem/assuntos-listagem.component';
import {AssuntosCadastroComponent} from './assuntos-cadastro/assuntos-cadastro.component';
import {AssuntosRoutingModule} from './assuntos-routing.module';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ExportAsModule} from 'ngx-export-as';
import {MatMenuModule} from '@angular/material/menu';


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
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    ExportAsModule,
    MatMenuModule
  ]
})
export class AssuntosModule {
}
