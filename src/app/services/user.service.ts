import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPagination } from '../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../modules/auth';

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

  create(data: User): Observable<User> {
    return this.http.post<{ data: User }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  register(data: FormData): Observable<User> {
    return this.http.post<{ data: User }>(`${environment.apiUrl}/auth/register`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<UserPagination> {
    return this.http.get<UserPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  // getAllData(): Observable<TaskStatus[]> {
  //   return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/all`, {
  //     withCredentials: true
  //   }).pipe(map(response => {
  //     return response.data;
  //   }));
  // }

  getOne(id: string): Observable<User> {
    return this.http.get<{ data: User }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  // getStatus(): Observable<TaskStatus[]> {
  //   return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/all`, { withCredentials: true }).pipe(map(response => response.data))
  // }
  update(id: string, data: User): Observable<User> {
    return this.http.put<{ data: User }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<User> {
    return this.http.delete<{ data: User }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
  // getParentCategory(): Observable<TaskStatus[]> {
  //   return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/parent`, {
  //     withCredentials: true
  //   }).pipe(map(response => {
  //     return response.data;
  //   }));
  // }


}
