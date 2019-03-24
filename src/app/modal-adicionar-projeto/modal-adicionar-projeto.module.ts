import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAdicionarProjetoPage } from './modal-adicionar-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAdicionarProjetoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    
  ],
  declarations: [ModalAdicionarProjetoPage]
})
export class ModalAdicionarProjetoPageModule {}
