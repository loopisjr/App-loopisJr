
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any;

  constructor(public http: HttpClient){
    console.log("Api_rest")

  }

  /*login(user,opc) {
    let url = 'http://localhost:8081/funcionarios/login';
    return this.http.post(url,user,opc);
    
  }*/

  





}
