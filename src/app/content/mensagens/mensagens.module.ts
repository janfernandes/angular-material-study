import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensListagemComponent } from './mensagens-listagem/mensagens-listagem.component';
import { MensagensCadastroComponent } from './mensagens-cadastro/mensagens-cadastro.component';
import { MensagensRoutingModule } from './mensagens-routing.module';



@NgModule({
  declarations: [MensagensListagemComponent, MensagensCadastroComponent],
  imports: [
    CommonModule,
    MensagensRoutingModule
  ]
})
export class MensagensModule { }
