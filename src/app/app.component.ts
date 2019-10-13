import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  id: string;
  authenticated: boolean;

  constructor(
    private router: Router,
    public userService: UserService
    ) {
  }

  ngOnInit() {
    this.router.navigate(this.userService.authenticated ? [`home`]: ['sign-up']);
  }

  login($event) {
    this.userService.authenticate(true);
    this.userService.setCurrentUser($event.user);
    this.authenticated = true;
    this.id = $event.id;
    this.router.navigate([`home`]);
  }

  logout($event) {
    this.userService.authenticate(false);
    this.userService.setCurrentUser(null);
    this.authenticated = false;
    this.id = null;
  }
}
