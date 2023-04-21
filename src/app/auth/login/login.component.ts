import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alerts.service';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  public loginForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.googleInit();
  }

  @ViewChild('googleBtn') googleBtn: ElementRef | undefined;

  googleInit() {
    google.accounts.id.initialize({
      client_id:
        '903835936656-obikp14ppv2uj0pi442jop93ecscr9q5.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });
    google.accounts.id.renderButton(
      document.getElementById('googleBtn'),
      {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
      } // customization attributes
    );
    google.accounts.id.prompt();
  }

  handleCredentialResponse(response: any) {
    this.userService.googleLogin(response.credential).subscribe(
      (resp) => {
        console.log({ login: resp });
        this.ngZone.run(() => {
          this.router.navigateByUrl('/');
        });
      },
      (err) => {
        this.alertService.showAlert('Error', err.error.msg, 'error');
      }
    );
  }

  public login() {
    this.userService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('rememberMe')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        }
        console.log('Usuario logueado');
        console.log(resp);
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.alertService.showAlert('Error', err.error.msg, 'error');
      }
    );
  }
}
