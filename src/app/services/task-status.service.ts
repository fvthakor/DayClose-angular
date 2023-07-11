import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TaskStatus, TaskStatusPagination } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  route = 'task-status'
  constructor(
    private http: HttpClient
  ) { }


  create(data: TaskStatus): Observable<TaskStatus> {
    return this.http.post<{ data: TaskStatus }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<TaskStatusPagination> {
    return this.http.get<TaskStatusPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<TaskStatus[]> {
    return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/all`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id: string): Observable<TaskStatus> {
    return this.http.get<{ data: TaskStatus }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  getStatus(): Observable<TaskStatus[]> {
    return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/all`, { withCredentials: true }).pipe(map(response => response.data))
  }
  update(id: string, data: TaskStatus): Observable<TaskStatus> {
    return this.http.put<{ data: TaskStatus }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<TaskStatus> {
    return this.http.delete<{ data: TaskStatus }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
  getParentCategory(): Observable<TaskStatus[]> {
    return this.http.get<{ data: TaskStatus[] }>(`${environment.apiUrl}/${this.route}/parent`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }
}
