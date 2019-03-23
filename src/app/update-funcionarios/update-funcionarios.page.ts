import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-funcionarios',
  templateUrl: './update-funcionarios.page.html',
  styleUrls: ['./update-funcionarios.page.scss'],
})
export class UpdateFuncionariosPage implements OnInit {
  
  emailFuncionario = "";
  funcionario:any;
  constructor(public ativatedRoute:ActivatedRoute, public http: HttpClient) {
  }
  
  ngOnInit() {
    this.emailFuncionario = this.ativatedRoute.snapshot.paramMap.get("email");
    this.buscarFuncionario();
  }
  buscarFuncionario(){
    let url = 'http://localhost:8081/funcionarios/'.concat(this.emailFuncionario);
    let dado: Observable<any> = this.http.get(url);
    dado.subscribe(result => {
      this.funcionario = result;
    });
  }
}
// export class Funcionario {
//   constructor(public email: string, public senha: string, public nome: string, public cargo: string, public perfilGit: string,
//     public habilidades: string, public tipo: string) { }
// }