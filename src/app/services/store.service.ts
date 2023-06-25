import { Injectable } from '@angular/core';
import { Store, StorePagination } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient
  ) { }

  create(data: Store): Observable<Store> {
    return this.http.post<{ data: Store }>(`${environment.apiUrl}/store`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<StorePagination> {
    return this.http.get<StorePagination>(`${environment.apiUrl}/store?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getOne(id: string): Observable<Store> {
    return this.http.get<{ data: Store }>(`${environment.apiUrl}/store/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: Store): Observable<Store> {
    return this.http.put<{ data: Store }>(`${environment.apiUrl}/store/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Store> {
    return this.http.delete<{ data: Store }>(`${environment.apiUrl}/store/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
