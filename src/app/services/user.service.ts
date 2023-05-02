import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { RegisterForm } from '../interfaces/registerForm.interface';
import { LoginForm } from '../interfaces/loginForm.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

declare const google: any;
const base_url = `${environment.base_url}`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/users/createUser`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  googleLogin(token: string) {
    return this.http.post(`${base_url}/login/google`, { token: token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  validateToken(): Observable<boolean> {
    const localToken = localStorage.getItem('token') || '';
    return this.http
      .get(`${base_url}/login/renew`, {
        headers: {
          'x-token': localToken,
        },
      })
      .pipe(
        tap((resp: any) => {
          const { name, email, google, role, uid, image } = resp.user;
          this.user = new User(name, email, '', role, uid, google, image);
          console.log(this.user.name);
          localStorage.setItem('token', resp.token);
        }),
        map((resp) => true),
        catchError((error) => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');

    const email = localStorage.getItem('email');
    google.accounts.id.revoke(email, () => {
      this.router.navigateByUrl('/login');
    });
  }
}
