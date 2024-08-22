import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder, private route:Router){}
  email:string = '';
  password: string='';

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }
  submitform(){
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;
    console.log(this.email);
    console.log(this.password);
  }
  openNewAccount(e:Event){
    e.preventDefault();
    // document.getElementById('newcard').style.display='block';
  }

}
