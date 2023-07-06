import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task, TaskPagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  route = 'task'
  constructor(
    private http: HttpClient
  ) { }


  create(data: FormData): Observable<Task> {
    return this.http.post<{ data: Task }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<TaskPagination> {
    return this.http.get<TaskPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  // getAllData(): Observable<Task[]> {
  //   return this.http.get<{ data: Task[] }>(`${environment.apiUrl}/${this.route}/all`, { withCredentials: true }).pipe((map(response => response.data)))
  // }

  getOne(id: string): Observable<Task> {
    return this.http.get<{ data: Task }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: FormData): Observable<Task> {
    return this.http.put<{ data: Task }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Task> {
    return this.http.delete<{ data: Task }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
