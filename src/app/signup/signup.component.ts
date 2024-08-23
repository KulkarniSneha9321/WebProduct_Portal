import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService, private router:Router){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void { }

  get name(){
    return this.signupForm.get('name');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }

  onSubmit(){
    if(this.signupForm.valid){
      this.authService.signup(this.signupForm.value).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }
  SignUp(){
    console.log("signing")
    this.router.navigate(['login'])
  }
  
}
