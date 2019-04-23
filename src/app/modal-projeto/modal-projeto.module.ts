import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalProjetoPage } from './modal-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProjetoPage
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
  declarations: [ModalProjetoPage]
})
export class ModalProjetoPageModule {}
