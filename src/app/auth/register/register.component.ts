import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required]],
    passConfirmation: ['', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  public formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  validateField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    }
    return false;
  }

  createUser(): void {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
  }
}
