import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated: boolean;
  currentUser = null;

  constructor(private http: HttpClient) { }

  createAccount(user): Observable<any> {
    return this.http.post(
      `https://openpal.glitch.me/api/user/register`,
      user
    );
  }

  login(credentials): Observable<any> {
    const loginState: any = this.http.post(
      `https://openpal.glitch.me/api/user/login`,
      credentials
    );
      
    return loginState.unauthorized? null : loginState;
  }

  getUserDetails(id): Observable<any> {
    return this.http.get(`https://openpal.glitch.me/api/user/${id}`,)
  }

  getDisciplers(): Observable<any> {
    return this.http.get(`https://openpal.glitch.me/api/discipler/`);
  }

  setCurrentUser(id) {
    this.currentUser = id;
  }

  authenticate(toggle: boolean) {
    this.authenticated = toggle;
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser;
  }
}
