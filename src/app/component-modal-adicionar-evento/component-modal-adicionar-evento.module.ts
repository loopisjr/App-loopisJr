import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentModalAdicionarEventoPage } from './component-modal-adicionar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentModalAdicionarEventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentModalAdicionarEventoPage]
})
export class ComponentModalAdicionarEventoPageModule {}
