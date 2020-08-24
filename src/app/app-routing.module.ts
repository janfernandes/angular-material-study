import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssuntosModule } from './content/assuntos/assuntos.module';
import { MensagensModule } from './content/mensagens/mensagens.module';


const routes: Routes = [
  { path: 'assuntos', loadChildren: () => AssuntosModule },
  { path: 'mensagens', loadChildren: () => MensagensModule },
  // { path: 'dashboard', loadChildren: () => DashboardModule },

  { path: '', redirectTo: '', pathMatch: 'full'  },
  // { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
