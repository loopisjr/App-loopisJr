import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {ComponentModalAdicionarEventoPage} from '../component-modal-adicionar-evento/component-modal-adicionar-evento.page'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  eventos: any;
  root: boolean = true;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private alert: AlertController
  ){
    this.eventos = this.iniciarEventos();
    console.log(this.eventos)
  }

  ngOnInit() {
  }

  iniciarEventos(){
    let url = "http://localhost:8081/eventos/";
    this.http.get(url,{ observe : 'response' }).subscribe(res => {
      this.eventos = res.body;
    },(error: any) => this.alertNestaPagina("Falha","Falha ao buscar eventos")
    );
  }

  async adicionarEvento(){
    const modal = await this.modalCtrl.create({
      component : ComponentModalAdicionarEventoPage
    });
    return await modal.present();
  }

  async alertNestaPagina(titulo,msg){
    const novoAlert = await this.alert.create({
      header : titulo,
      subHeader : msg,
      buttons : ['OK']
    });
    await novoAlert.present();
  }
}
