import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated: boolean;
  userID: string = null;

  constructor(private http: HttpClient) { }

  createAccount(user): Observable<any> {
    return this.http.post(
      `https://openpal.glitch.me/api/user/register`,
      user
    );
  }

  login(credentials): Observable<any> {
    return this.http.post(
      `https://openpal.glitch.me/api/user/login`,
      credentials
    )
  }
}
