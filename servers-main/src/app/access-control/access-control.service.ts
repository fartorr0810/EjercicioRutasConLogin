import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post(url, body);
  }
  getToken() {
    return JSON.parse(<string>localStorage.getItem("jwt"))
  }
  // getUser() {
  //   return this.http.get("https://reqres.in/api/users/2");
  // }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
