import { NavController } from '@ionic/angular';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss']
})
export class FuncionariosPage implements OnInit {

  funcionarios: any;
  // email: string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.getDados();
  }

  ngOnInit() {
  }

  getDados() {
    let url = 'http://localhost:8081/funcionarios/';
    let dado: Observable<any> = this.http.get(url);
    dado.subscribe(result=>{
      this.funcionarios = result;
    });

  }
  redirecionarPagina(acao: string, email: string) {
    if (acao == "cadastrar") {
      this.navCtrl.navigateForward(`update-funcionarios/${acao}/" "`);
    } 
    else if (acao == "atualizar") {
      console.log(email);
      this.navCtrl.navigateForward(`update-funcionarios/${acao}/${email}`);
    }
  }
}
