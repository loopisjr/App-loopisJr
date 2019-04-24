import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalProjetoSobrePage } from './modal-projeto-sobre.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProjetoSobrePage
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
  declarations: [ModalProjetoSobrePage]
})
export class ModalProjetoSobrePageModule {}
