import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUser:any=null;
  constructor(private http:HttpClient) { }
  login(credentials:any):Observable<any>{
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.email === credentials.email && user.password === credentials.password)),
      map(user =>{
        if(user){
          this.currentUser = user;
          return user;
        }else{
          throw new Error('Invalid Credentials');
        }
      }),
      catchError(err => of(null))
    );
  }
  signup(userData: any):Observable<any>{
    return this.http.post(this.apiUrl,userData);
  }
  isAuthenticated():boolean{
    return !! this.currentUser;
  }
}
