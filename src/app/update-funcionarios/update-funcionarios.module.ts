import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateFuncionariosPage } from './update-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFuncionariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [UpdateFuncionariosPage]
})
export class UpdateFuncionariosPageModule {}
