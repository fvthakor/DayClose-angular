import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { County, CountyPagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountyService {
  route = 'county'
  constructor(
    private http: HttpClient
  ) { }


  create(data: County): Observable<County> {
    return this.http.post<{ data: County }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<CountyPagination> {
    return this.http.get<CountyPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<County[]> {
    return this.http.get<{ data: County[] }>(`${environment.apiUrl}/${this.route}/all`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id: string): Observable<County> {
    return this.http.get<{ data: County }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: County): Observable<County> {
    return this.http.put<{ data: County }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<County> {
    return this.http.delete<{ data: County }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
