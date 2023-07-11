
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskProgress, TaskProgressPagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskProgressService {

  route = 'task-progress'
  constructor(
    private http: HttpClient
  ) { }


  create(data: FormData): Observable<any> {
    console.log('amam');
    console.log(data);
    return this.http.post<{ data: any }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {

      return response.data;
    }));
  }
  getAll(page: number, limit: number, query: string): Observable<TaskProgressPagination> {
    return this.http.get<TaskProgressPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }
  getTaskStatusAll(page: number, limit: number, query: string, id: any): Observable<TaskProgressPagination> {
    return this.http.get<TaskProgressPagination>(`${environment.apiUrl}/${this.route}/taskstatus/${id}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }
  delete(id: string): Observable<TaskProgress> {
    return this.http.delete<{ data: TaskProgress }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
  update(id: string, data: FormData): Observable<TaskProgress> {
    return this.http.put<{ data: TaskProgress }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }
}
