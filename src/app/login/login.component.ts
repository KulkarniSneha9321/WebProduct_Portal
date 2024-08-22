import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private authService:AuthService, private router:Router){}

  login():void{
    if (this.authService.login(this.email,this.password)){
      this.router.navigate(['/dashboard']);
    }
    else{
      alert('Invalid credentials');
    }
  }
  signup():void{
    this.router.navigate(['/signup']);
  }

}