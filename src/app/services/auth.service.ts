import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users:User[]=[];
  register(user:User):void{
    this.users.push(user);
  }
  login(email:string,password:string):boolean{
    return this.users.some(user=>
      user.email === email && user.password === password
    );
  }

  constructor() { }
}
