import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssuntosListagemComponent} from './assuntos-listagem/assuntos-listagem.component';
import {AssuntosCadastroComponent} from './assuntos-cadastro/assuntos-cadastro.component';


const routes: Routes = [
  { path: '', component: AssuntosListagemComponent},
  { path: 'novo', component: AssuntosCadastroComponent},
  { path: ':codigo', component: AssuntosCadastroComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AssuntosRoutingModule { }
