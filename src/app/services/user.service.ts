import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  route = 'user'
  constructor(
    private http: HttpClient
  ) { }
  
  getEmployee(): Observable<User[]> {
    return this.http.get<{ data: User[] }>(`${environment.apiUrl}/${this.route}/employee`, { withCredentials: true }).pipe((map(response => response.data)))
  }
}
