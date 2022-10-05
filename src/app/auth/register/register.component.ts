import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    pass: ['', [Validators.required]],
    passConfirmation: ['', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  createUser() {
    console.log(this.registerForm.value);
  }
}
