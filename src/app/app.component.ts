import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authenticated = false;
  title = 'openpal-web';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(this.authenticated ? ['']: ['sign-up']);
  }
}
