import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Evento } from 'src/model/Evento';


@Component({
  selector: 'app-component-modal-adicionar-evento',
  templateUrl: './component-modal-adicionar-evento.page.html',
  styleUrls: ['./component-modal-adicionar-evento.page.scss'],
})
export class ComponentModalAdicionarEventoPage implements OnInit {

  novoEvento : Evento;
  form : FormGroup;

  constructor(
    private nav:NavController,
    private modalCtrl:ModalController,
    private http: HttpClient,
    private alert: AlertController,
    private formBuilder : FormBuilder
  ){
    this.novoEvento = new Evento();
  }

  //configurações do formulário do lado do server
  ngOnInit() {
    this.form = this.formBuilder.group({
      titulo : [null, [Validators.required,Validators.minLength(6)]],
      data: [null, Validators.required],
      hora: [null, Validators.required],
      descricao : [null]
    })
  }

  fechar(){
    this.modalCtrl.dismiss();
  }
  
  cadastrar(){
    let url = "http://localhost:8081/eventos/";
    // let url = "https://httpbin.org/post";
    this.http.post(url,this.form.value,{ observe : 'response'}).subscribe(res => {
      //reseta os campos do form apos a requisição
      this.form.reset();
      this.alertNestaPagina("Sucesso","Seu novo evento foi cadastrado!");
    },
    (error: any) => this.alertNestaPagina("Falha","Falha ao cadastrar evento."));
    
  }

  async alertNestaPagina(titulo,msg){
    const novoAlert = await this.alert.create({
      header : titulo,
      subHeader : msg,
      buttons : ['OK']
    });
    await novoAlert.present();
  }

  limpar(){
    this.form.reset();
  }
}
