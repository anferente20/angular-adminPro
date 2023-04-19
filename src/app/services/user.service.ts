import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterForm } from "../interfaces/registerForm.interface";
import { environment } from "src/environments/environment";

const base_url =`${environment.base_url}/users` ;

@Injectable({
    providedIn: 'root'
})



export class UserService {

    constructor(private http: HttpClient) {}

    createUser (formData: RegisterForm) {
        
        return this.http.post(`${base_url}/createUser`, formData);
    }
}