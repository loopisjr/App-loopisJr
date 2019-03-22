import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModalAdicionarEventoPageModule } from './component-modal-adicionar-evento/component-modal-adicionar-evento.module'
// import { ComponentModalAdicionarEventoPage } from './component-modal-adicionar-evento/component-modal-adicionar-evento.page'


import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> df15f20cbf65d696113d1cdf72744a6d5042587e

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
=======
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            ComponentModalAdicionarEventoPageModule,
            HttpClientModule,
            ReactiveFormsModule,
            // DataFormModule
          ],
>>>>>>> df15f20cbf65d696113d1cdf72744a6d5042587e
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
