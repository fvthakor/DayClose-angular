import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner, BannerPagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  route = 'banner'
  constructor(
    private http: HttpClient
  ) { }


  create(data: FormData): Observable<Banner> {
    return this.http.post<{ data: Banner }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<BannerPagination> {
    return this.http.get<BannerPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<Banner[]> {
    return this.http.get<{ data: Banner[] }>(`${environment.apiUrl}/${this.route}/all`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id: string): Observable<Banner> {
    return this.http.get<{ data: Banner }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: FormData): Observable<Banner> {
    return this.http.put<{ data: Banner }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Banner> {
    return this.http.delete<{ data: Banner }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
