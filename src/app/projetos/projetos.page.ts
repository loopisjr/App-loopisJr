import { Funcionario } from './../../model/Funcionario';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalAdicionarProjetoPage } from '../modal-adicionar-projeto/modal-adicionar-projeto.page';
import { ModalProjetoSobrePage } from './../modal-projeto-sobre/modal-projeto-sobre.page';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.page.html',
  styleUrls: ['./projetos.page.scss'],
})
export class ProjetosPage implements OnInit {

  root: boolean = true;
  projetos: any;
  projetoSelecionado = null;


  constructor(
    private http: HttpClient,
    private alert: AlertController,
    private modalCtrl: ModalController
  ) {
    this.iniciarProjetos();
  }

  ngOnInit() {
  }
  
  iniciarProjetos(){  
    let url = "http://localhost:8081/projetos/";
    this.http.get(url, {observe: 'response'}).subscribe(res => {
      this.projetos = res.body;
    },(error: any) => this.alertNestaPagina("Falha","Não foi possível buscar os Projetos")
    );
  }

  // ABRE UMA MODAL
  async adicionarProjeto(){
    const modal = await this.modalCtrl.create({
      component: ModalAdicionarProjetoPage
    });
    return await modal.present();
  }

  async sobreProjeto(){
    const modal = await this.modalCtrl.create({
      component: ModalProjetoSobrePage,
      componentProps: {
        'projetoSelecionado': this.projetoSelecionado
      }
    });
    return await modal.present();
  }

  async alertNestaPagina(titulo, msg){
    const novoAlert = await this.alert.create({
      header : titulo,
      subHeader : msg,
      buttons : ['OK']
    });
    await novoAlert.present();
  }

  maisSobreProjeto(projeto){
    this.projetoSelecionado = projeto;
    this.sobreProjeto();    
  }
}
