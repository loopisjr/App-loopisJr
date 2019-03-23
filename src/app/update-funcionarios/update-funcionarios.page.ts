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
  updateMetodo = "Cadastrar";
  constructor(private formBuilder: FormBuilder, public http: HttpClient, public ativatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.emailFuncionario = this.ativatedRoute.snapshot.paramMap.get("email");
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.minLength(6), Validators.required]],
      senhaConfirmar: [null, [this.confirmaSenha("senha")]],
      cargo: [null, Validators.required],
      habilidades: [null, Validators.required],
      userGit: [null, Validators.required],
      root: [false]
    });
    this.buscarFuncionario();
  }
  onSubmit() {
    console.log(this.formulario.value);
  }

  buscarFuncionario() {
    let url = 'http://localhost:8081/funcionarios/'.concat(this.emailFuncionario);
    let dado: Observable<any> = this.http.get(url);
    dado.subscribe(result => {
      this.updateMetodo = "Cadastrar";
      this.funcionario = result;
      console.log(JSON.parse(JSON.stringify(this.funcionario)));
      if (result != null) {
        this.updateMetodo = "Atualizar";
        this.formulario.patchValue({
          nome: result.nome,
          email: result.email,
          cargo: result.cargo,
          habilidades: result.habilidades,
          userGit: result.perfilGithub,
          root: (result.tipo == "ROOT")
        });
      }
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

  update() {
    if(this.updateMetodo === "Cadastrar"){
      let url = 'http://localhost:8081/funcionarios/'.concat(this.emailFuncionario);
      let dado: Observable<any> = this.http.post(url, {"funcionario" : this.funcionario});
    }else if(this.updateMetodo === "Atualizar"){

    }
  }
}
export class Funcionario {
  constructor(public email: string, public senha: string, public nome: string, public cargo: string, public perfilGit: string,
    public habilidades: string, public tipo: string) { }
}