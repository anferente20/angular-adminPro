import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  }, {
    validators: this.equalPasswords('pass', 'passConfirmation') //validador de contraseñas
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
    if (this.registerForm.valid) {
      console.log("1");
    } else {
      console.log("2");
    }
  }
   
  arePasswordsValid(){
    const pass1 = this.registerForm.get('pass')?.value;
    const pass2 = this.registerForm.get('passConfirmation')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  equalPasswords(pass: string, passConfirmation: string) {
    return (formGroup: FormGroup)  => {
      const pass1 = formGroup.get(pass);
      const pass2 = formGroup.get(passConfirmation);

      if (pass1?.value !== pass2?.value) {
        pass2?.setErrors({ notEqual: true});
      } else {
        pass2?.setErrors(null);
      }
      return 
    }
  }
}
