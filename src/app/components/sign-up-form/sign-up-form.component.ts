import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  signup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    lifeIssues: new FormControl(''),
    displayName: new FormControl(''),
    hideName: new FormControl(''),
    preferredMedium: new FormControl('')
  })
  hasDisplayName = false;
  sometext = '';

  constructor() { }

  ngOnInit() {
  }

  toggleDisplayName(e) {
    this.hasDisplayName = e.target.checked;
    this.signup.controls.displayName.setValidators(
      e.target.checked ? Validators.required: null
    );
  }

  submit() {
    this.sometext = 'Hello';
  }

}
