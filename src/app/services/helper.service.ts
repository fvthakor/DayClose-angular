import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ConfirmModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  confirmSwal({ title, message, buttonText }: ConfirmModel): Observable<boolean> {
    return new Observable((observer) => {
      Swal.fire({
        title: title, //'Are you sure?',
        text: message,
        icon: 'warning', //warning
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: buttonText // Yes, delete it!
      }).then((result) => {
        if (result.isConfirmed) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      })
    });

  }
}
