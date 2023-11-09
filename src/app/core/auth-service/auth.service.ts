import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { login_interface } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url : string  = 'https://eventapistaging.enterprisedev.projectsarea.com/api'
  constructor(private http: HttpClient) { }


  login(data:login_interface){
    return this.http.post(`${this.url}/User/Login`,data)
  }

  setToken(token:string){
    localStorage.setItem("token",token)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  tokenStatus(){
    return localStorage.getItem('token') ? true : false
  }
}
