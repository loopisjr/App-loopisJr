import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ComponentModalAdicionarEventoPage} from '../component-modal-adicionar-evento/component-modal-adicionar-evento.page'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async adicionarEvento(){
    console.log('.');
    const modal = await this.modalCtrl.create({
      component : ComponentModalAdicionarEventoPage
    });
    return await modal.present();
  }
}
