import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth-service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup | any;
  
  constructor(private auth_service: AuthService , private router: Router) { }
  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl("superadmin@events.com", [Validators.required,Validators.email]),
      password: new FormControl("123456", [Validators.required]),
    })
  }

  login() {
    const login_data = this.loginForm.value
    this.auth_service.login(login_data).subscribe((res:any) => {
      console.log(res)
      this.auth_service.setToken(res.result.token)
      this.router.navigate(['pages/users/user_list']);
    })
  }
}
