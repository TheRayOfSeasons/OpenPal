import { 
  Component, 
  OnInit, 
  OnChanges,
  Input, 
  EventEmitter, 
  Output, 
  ChangeDetectorRef, 
  ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements OnInit, OnChanges {
  @Input() authenticated;
  @Input() id;
  @Output() onLogin = new EventEmitter();

  signin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    public userService: UserService,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router
    ) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.signin.getRawValue()).subscribe(user =>
    {
      if(!user.unauthorized)
      {
        this.onLogin.emit({user});
      }
    });
  }

  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  }

  routeLink(route: string) {
    this.router.navigate([`${route}/${this.id}`]);
  }

}
