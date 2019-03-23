import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss']
})
export class FuncionariosPage implements OnInit {
  
  public itens:any;
  constructor(public navCtrl:NavController, public http:HttpClient) {
    this.getDados();
  }
  
  ngOnInit() {
  }

  getDados(){
    let url='http://localhost:8081/funcionarios/';
    let dado: Observable<any> = this.http.get(url);
    dado.subscribe(result => {
      this.itens = result
    });

  }
  verUsuario(id : BigInteger){
    console.log(id)
  }
}