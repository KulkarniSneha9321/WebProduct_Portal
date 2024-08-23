import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }
  ngOnInit(): void {}

    get email(){
      return this.loginForm.get('email');
    }
    get password(){
      return this.loginForm.get('password');
    }
    onSubmit(){
      if(this.loginForm.valid){
        this.authService.login(this.loginForm.value).subscribe(()=>{
          this.router.navigate(['/dashboard']);
        });
      }
    }
    
  
  
}