import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'funcionarios', loadChildren: './funcionarios/funcionarios.module#FuncionariosPageModule' },
  { path: 'projetos', loadChildren: './projetos/projetos.module#ProjetosPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
