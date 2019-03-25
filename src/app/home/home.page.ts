import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './../api/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  result: any;


  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  entrar() {
    this.navCtrl.navigateForward('tabs/principal');

  }
  validar(form) {
    let url = 'http://localhost:8081/funcionarios/login';
    
    console.log(form.value)

    this.http.post(url,form.value,{ observe : 'response'}).subscribe(res => {
      this.entrar();
    },
    (error: any) => console.log("Falha","Usuario não cadastrado"));
    
  }
}