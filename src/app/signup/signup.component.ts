import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name:string='';
  mob:string= '';
  email: string='';
  password: string='';

  constructor(private authService: AuthService,private router:Router){}

  signup():void{
    const newUser:User = {
      name:this.name,
      mob:this.mob,
      email:this.email,
      password:this.password
    };

    this.authService.register(newUser);
    this.router.navigate(['/login']);
  }

}
