import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-funcionarios',
  templateUrl: './update-funcionarios.page.html',
  styleUrls: ['./update-funcionarios.page.scss'],
})
export class UpdateFuncionariosPage implements OnInit {
  formulario: FormGroup;
  funcionario: Funcionario;
  emailFuncionario = "";
  updateMetodo = "";
  funcionarioNormal = false;
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public ativatedRoute: ActivatedRoute,
    private alert: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.emailFuncionario = this.ativatedRoute.snapshot.paramMap.get("email");
    this.updateMetodo = this.ativatedRoute.snapshot.paramMap.get("acao");
    this.formulario = this.formBuilder.group({
      nome: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, Validators.required],
      email: [{value: null, disabled: (this.updateMetodo == "atualizar") }, Validators.required],
      senha: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, [Validators.minLength(6), Validators.required]],
      senhaConfirmar: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, [this.confirmaSenha("senha"), Validators.required]],
      cargo: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, Validators.required],
      habilidades: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, Validators.required],
      perfilGithub: [{value:null, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, Validators.required],
      tipo: [{value:false, disabled:this.funcionarioNormal&&(this.updateMetodo == "atualizar")}, Validators.required]
    });
    if (this.updateMetodo == "atualizar") {
      this.buscarFuncionario();
    }
  }

  buscarFuncionario() {
    let url = 'http://localhost:8081/funcionarios/'.concat(this.emailFuncionario);
    let dado: Observable<any> = this.http.get(url);
    dado.subscribe(result => {
      this.funcionario = result;
      this.formulario.patchValue({
        nome: result.nome,
        email: result.email,
        cargo: result.cargo,
        habilidades: result.habilidades,
        perfilGithub: result.perfilGithub,
        tipo: (result.tipo == "ROOT")
      });
    });
  }

  update() {
    let tipo = (this.formulario.get("tipo").value) ? "ROOT" : "NORMAL";
    this.funcionario = new Funcionario(
      this.formulario.get("email").value,
      this.formulario.get("senha").value,
      this.formulario.get("nome").value,
      this.formulario.get("cargo").value,
      this.formulario.get("perfilGithub").value,
      this.formulario.get("habilidades").value,
      tipo
    );

    if (this.updateMetodo === "cadastrar") {
      let url = 'http://localhost:8081/funcionarios/';
      let dado: Observable<any> = this.http.post(url, this.funcionario, { observe: 'response' });
      dado.subscribe(result => {
        this.alertNestaPagina("Sucesso", "Novo funcionario cadastrado!");
        this.navCtrl.navigateForward(`tabs/funcionarios`);
      },
        (error: any) => this.alertNestaPagina("Falha", "Falha ao cadastrar funcionario."));
    } else if (this.updateMetodo === "atualizar") {
      let url = 'http://localhost:8081/funcionarios/';
      let dado: Observable<any> = this.http.put(url, this.funcionario, { observe: 'response' });
      dado.subscribe(result => {
        this.alertNestaPagina("Sucesso", "Dados do funcionario atualizado!");
        this.navCtrl.navigateForward(`tabs/funcionarios`);
      },
        (error: any) => this.alertNestaPagina("Falha", "Falha ao atualizar dados."));
    }
  }

  removerFuncionario() {
    let url = 'http://localhost:8081/funcionarios/'.concat(this.emailFuncionario);
    let dado: Observable<any> = this.http.delete(url, { observe: 'response' });
    dado.subscribe(result => {
      this.alertNestaPagina("Sucesso", "Funcionario removido com sucesso!");
      this.navCtrl.navigateForward(`tabs/funcionarios`);
    });
  }

  confirmaSenha(outroCampo: string) {
    const validator = (formControl: FormControl) => {
      if (outroCampo == null) {
        throw new Error("É necessário informar um campo");
      }
      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }
      const campo = (<FormGroup>formControl.root).get(outroCampo);
      if (campo.value !== formControl.value) {
        return { confirmaSenha: true };
      }
      return null;
    };
    return validator;
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
            this.removerFuncionario();
          }
        }
      ]
    });

    await alert.present();
  }

  async alertNestaPagina(titulo, msg) {
    const novoAlert = await this.alert.create({
      header: titulo,
      subHeader: msg,
      buttons: ['OK']
    });
    await novoAlert.present();
  }
}
export class Funcionario {
  constructor(public email: string, public senha: string, public nome: string, public cargo: string, public perfilGithub: string,
    public habilidades: string, public tipo: string) { }
}