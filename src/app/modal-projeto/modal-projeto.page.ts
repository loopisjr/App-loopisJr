import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../../model/projeto';

@Component({
  selector: 'app-modal-projeto',
  templateUrl: './modal-projeto.page.html',
  styleUrls: ['./modal-projeto.page.scss'],
})
export class ModalProjetoPage implements OnInit {

  @Input()
  acao:string;
  @Input()
  projeto:Projeto;
  
  form: FormGroup;
  
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alert: AlertController,
    private navCtrl: NavController
    ) {
      
    }
    
    // CONFIGURAÇÔES DO FORMULÀRIO
    ngOnInit() {
      this.form = this.formBuilder.group({
        id: [null],
        titulo: [null,[Validators.required,Validators.minLength(6)]],
        dataEntrega: [null,Validators.required],
        telefone: [null,Validators.maxLength(11)],
        nomeContratante: [null,[Validators.required,Validators.minLength(6)]],
        emailContratante: [null,[Validators.required,Validators.email]],
        descricao: [null,[Validators.required,Validators.minLength(20),Validators.maxLength(200)]]
      });
      if(this.acao=="Atualizar"){
        this.preencherCampos();
      }
    }
  
  preencherCampos(){
    var data = this.projeto.dataEntrega.toString();
    data = data.split("T")[0];
    this.form.patchValue({
      id : this.projeto.id,
      titulo : this.projeto.titulo,
      dataEntrega: data, 
      telefone: this.projeto.telefone,
      nomeContratante: this.projeto.nomeContratante,
      emailContratante: this.projeto.emailContratante,
      descricao: this.projeto.descricao
    });
  }

  //adiciona o novo projeto
  updateProjetos(){
    if(this.acao=="Cadastrar"){
      let url = "http://localhost:8081/projetos/";
      this.http.post(url,this.form.value,{ observe: 'response' }).subscribe(res =>{
        this.form.reset();  
        this.alertNestaPagina("Sucesso","Novo Projeto cadastrado com sucesso");
      },(error: any) => this.alertNestaPagina("Falha","Falha no cadastro.")
      );
    }
    else if(this.acao=="Atualizar"){
      let url = "http://localhost:8081/projetos";
      this.http.put(url, this.form.value, {observe:'response'}).subscribe(res => {
        this.alertNestaPagina("Sucesso","Projeto atualizado com sucesso");
      },(error: any) => this.alertNestaPagina("Falha","Falha na atualização."));
    }
  }

  apagarProjeto(){
    let url = "http://localhost:8081/projetos/".concat(this.form.get("id").value);
    console.log(url);
    this.http.delete(url, {observe:'response'}).subscribe(res => {
      this.fechar();
    },(error: any) => this.alertNestaPagina("Falha","Falha na exlusão."));
  }

  async presentAlertConfirm() {
    const alert = await this.alert.create({
      header: 'Confirmação!',
      message: 'Você deseja realmente apagar estes dados?!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.apagarProjeto();
          }
        }
      ]
    });
    await alert.present();
  }

  //fecha a modal
  fechar(){
    this.modalCtrl.dismiss();
    window.location.reload();
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