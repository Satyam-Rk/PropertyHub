import { Injectable } from '@angular/core';
import { IUser } from '../Model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any) {
  let UserArray = [];
  if (localStorage.getItem('Users')) {
    UserArray = JSON.parse(localStorage.getItem('Users') as string);
  }
  return UserArray.find((p: IUser) => p.Username === user.userName && p.Password === user.password);
}
}
