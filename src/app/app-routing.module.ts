import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { IaComponent } from './pages/ia/ia.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'contatos', component: ContatosComponent},
   {path: 'servicos', component: ServiceComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ia', component: IaComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
