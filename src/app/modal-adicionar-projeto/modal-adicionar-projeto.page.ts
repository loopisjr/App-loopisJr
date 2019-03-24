import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-projeto',
  templateUrl: './modal-adicionar-projeto.page.html',
  styleUrls: ['./modal-adicionar-projeto.page.scss'],
})
export class ModalAdicionarProjetoPage implements OnInit {

  form: FormGroup;
  
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alert: AlertController
  ) {
    
  }

  // CONFIGURAÇÔES DO FORMULÀRIO
  ngOnInit() {
    this.form = this.formBuilder.group({
      titulo: [null,[Validators.required,Validators.minLength(6)]],
      dataEntrega: [null,Validators.required],
      telefone: [null,Validators.maxLength(11)],
      nomeContratante: [null,[Validators.required,Validators.minLength(6)]],
      emailContratante: [null,[Validators.required,Validators.email]],
      descricao: [null,[Validators.required,Validators.minLength(20),Validators.maxLength(200)]]
    })
  }

  //adiciona o novo projeto
  adicionarProjeto(){
    let url = "http://localhost:8081/projetos/";
    this.http.post(url,this.form.value,{ observe: 'response' }).subscribe(res =>{
      this.form.reset();
      this.alertNestaPagina("Sucesso","Novo Projeto cadastrado com sucesso");
    },(error: any) => this.alertNestaPagina("Falha","Falha no cadastro.")
    );
  }

  //fecha o modal
  fechar(){
    this.modalCtrl.dismiss();
  }

  //imprime a mesagem passada
  async alertNestaPagina(titulo,msg){
    const novoAlert = await this.alert.create({
      header : titulo,
      subHeader : msg,
      buttons : ['OK']
    });
    await novoAlert.present();
  }

}