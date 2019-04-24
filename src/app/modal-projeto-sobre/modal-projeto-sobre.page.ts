import { Funcionario } from './../../model/Funcionario';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-projeto-sobre',
  templateUrl: './modal-projeto-sobre.page.html',
  styleUrls: ['./modal-projeto-sobre.page.scss'],
})
export class ModalProjetoSobrePage implements OnInit {

  @Input() projetoSelecionado: any;
  funcionarios: any;
  form: FormGroup;

  
  constructor(
    private modalCtrl: ModalController,
    private alert: AlertController,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.funcionarios = this.getFuncionarios();
    this.form = formBuilder.group({
      funcionariosSelecionados: this.formBuilder.array(['teste'])
    })
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      checkbox: [null]
    })
  }

  fechar(){
    this.modalCtrl.dismiss();
    window.location.reload();
  }
  getFuncionarios(){
    let url = "http://localhost:8081/funcionarios";
    this.http.get(url, {observe: 'response'}).subscribe(res => {
     this.funcionarios = res.body;
    },(error: any) => this.alertNestaPagina("Falha","Não foi possível buscar os Projetos")
    );
  }

  async alertNestaPagina(titulo, msg){
    const novoAlert = await this.alert.create({
      header : titulo,
      subHeader : msg,
      buttons : ['OK']
    });
    await novoAlert.present();
  }

  adicionarProjeto(){
    console.log(this.form);
  }
  
  atualizarLista(funcionario: Funcionario,isSelecionado){
    const funcionariosSelecionados = <FormArray>this.form.controls.funcionariosSelecionados;
    if(isSelecionado.currentTarget.checked){
      console.log(new FormControl(funcionario));
      funcionariosSelecionados.push(new FormControl(funcionario));
      console.log(this.form.get("funcionariosSelecionados").value);
    }else{
      let index = funcionariosSelecionados.controls.findIndex(x => x.value.email === funcionario.email);
      funcionariosSelecionados.removeAt(index);
    }
  }

  vincularFuncionarios(){

  }
}
