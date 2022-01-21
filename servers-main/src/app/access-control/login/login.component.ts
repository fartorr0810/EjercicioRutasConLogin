import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessControlService } from '../access-control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email!: string;
  password!:string;

  constructor(private authService: AccessControlService,
    private router: Router,private http: HttpClient) { }
    ngOnInit(): void {
    }

  login(){
      this.authService.login(this.email,this.password)
      .subscribe( resp => {
        console.log(resp);
        localStorage.setItem('jwt',JSON.stringify(resp));
        this.router.navigateByUrl('servers');
      })
  }
  // setToken(token: string) {
  //   this.cookies.set("token", token);
  // }

}
