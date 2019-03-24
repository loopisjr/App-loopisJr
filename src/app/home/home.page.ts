import { UserService } from './../api/user.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result : any;
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
  ) { }


  comecar() {
    this.navCtrl.navigateForward('tabs/principal');

  }

  api_get() {
    this.userService.getDados()
      .then((response) => {
        this.result = JSON.stringify(response);

        console.log(this.result);
      })
      .catch(() => {
        console.log('erro');
      })

  };
}


