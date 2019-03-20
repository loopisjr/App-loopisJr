import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal-adicionar-evento',
  templateUrl: './component-modal-adicionar-evento.page.html',
  styleUrls: ['./component-modal-adicionar-evento.page.scss'],
})
export class ComponentModalAdicionarEventoPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  fechar(){
    this.modalCtrl.dismiss();
  }

  salvar(){
    alert("Você salvou!");
  }

}
