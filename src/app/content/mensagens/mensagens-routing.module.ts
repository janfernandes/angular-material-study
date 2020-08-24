import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MensagensListagemComponent} from './mensagens-listagem/mensagens-listagem.component';
import {MensagensCadastroComponent} from './mensagens-cadastro/mensagens-cadastro.component';

const routes: Routes = [
  { path: '', component: MensagensListagemComponent},
  { path: 'novo', component: MensagensCadastroComponent},
  { path: ':codigo', component: MensagensCadastroComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MensagensRoutingModule { }
