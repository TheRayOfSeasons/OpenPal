import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() authenticated;

  signin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private userService: UserService,
    private router: Router
    ) 
  { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.signin.getRawValue()).subscribe(user =>
    {
      if(!user.unauthorized)
        this.router.navigate(['home']);
    });
  }

}
