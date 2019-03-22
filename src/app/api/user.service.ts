import { Funcionario } from './../update-funcionarios/update-funcionarios.page';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private Api = "https://api.themoviedb.org/3/movie/popular?api_key=f7f27958a6eb8140f6f0257025e1137b"
  
  constructor(public http: HttpClient){
    console.log("Api_rest")

  }

  getDados() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=f7f27958a6eb8140f6f0257025e1137b"
    
    return this.http.get(url).toPromise();
    

  }

  funcionariospor_email(email: string){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=f7f27958a6eb8140f6f0257025e1137b"

    return this.http.get(url);

  }

  post(){
    let url = this.Api

  }

  delete(){
    let url = this.Api

  }

  atualizar(){
    let url = this.Api

  }





}
