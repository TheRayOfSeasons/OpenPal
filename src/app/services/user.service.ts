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
      `http://192.168.100.121:7777/api/user/login`,
      credentials
    );

    // alert(JSON.stringify(loginState));
    return loginState.unauthorized? null : loginState;
  }

  getUserDetails(id): Observable<any> {
    return this.http.get(`https://openpal.glitch.me/api/user/${id}`,)
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
