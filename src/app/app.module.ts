import { ModalProjetoSobrePageModule } from './modal-projeto-sobre/modal-projeto-sobre.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModalAdicionarEventoPageModule } from './component-modal-adicionar-evento/component-modal-adicionar-evento.module';
import { ModalAdicionarProjetoPageModule } from './modal-adicionar-projeto/modal-adicionar-projeto.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            ComponentModalAdicionarEventoPageModule,
            ModalAdicionarProjetoPageModule,
            ModalProjetoSobrePageModule,
            HttpClientModule,
            ReactiveFormsModule,
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
