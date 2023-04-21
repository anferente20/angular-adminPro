import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alerts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
      terms: [false, [Validators.required]],
    },
    {
      validators: this.equalpasswordwords('password', 'passwordConfirmation'), //validador de contraseñas
    }
  );

  public formSubmitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  validateField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    }
    return false;
  }

  createUser(): void {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log('Fallamos');
      return;
    }

    // If form is valid, register user
    this.userService.createUser(this.registerForm.value).subscribe(
      (resp) => {
        console.log('Usuario creado');
        console.log(resp);
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.alertService.showAlert('Error', err.error.msg, 'error');
      }
    );
  }

  arePasswordsValid() {
    const password1 = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('passwordConfirmation')?.value;

    if (password1 !== password2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  equalpasswordwords(password: string, passwordConfirmation: string) {
    return (formGroup: FormGroup) => {
      const password1 = formGroup.get(password);
      const password2 = formGroup.get(passwordConfirmation);

      if (password1?.value !== password2?.value) {
        password2?.setErrors({ notEqual: true });
      } else {
        password2?.setErrors(null);
      }
      return;
    };
  }
}
