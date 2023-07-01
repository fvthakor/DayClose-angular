import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Category, CategoryPagination, CityPagination } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  route = 'category'
  constructor(
    private http: HttpClient
  ) { }


  create(data: Category): Observable<Category> {
    return this.http.post<{ data: Category }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<CategoryPagination> {
    return this.http.get<CategoryPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<Category[]> {
    return this.http.get<{ data: Category[] }>(`${environment.apiUrl}/${this.route}/all`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id: string): Observable<Category> {
    return this.http.get<{ data: Category }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: Category): Observable<Category> {
    return this.http.put<{ data: Category }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Category> {
    return this.http.delete<{ data: Category }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
  getParentCategory(): Observable<Category[]> {
    return this.http.get<{ data: Category[] }>(`${environment.apiUrl}/${this.route}/parent`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }
}
