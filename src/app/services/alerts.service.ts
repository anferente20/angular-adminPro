import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from 'sweetalert2'



@Injectable({
    providedIn: 'root'
})



export class AlertService {


    showAlert( title: string, message:string, type: SweetAlertIcon) {
        return Swal.fire(title, message, type);
    }
}