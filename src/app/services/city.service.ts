import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, CityPagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  route = 'city'
  constructor(
    private http: HttpClient
  ) { }


  create(data: City): Observable<City> {
    return this.http.post<{ data: City }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<CityPagination> {
    return this.http.get<CityPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<City[]> {
    return this.http.get<{ data: City[] }>(`${environment.apiUrl}/${this.route}/all`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id: string): Observable<City> {
    return this.http.get<{ data: City }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: City): Observable<City> {
    return this.http.put<{ data: City }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<City> {
    return this.http.delete<{ data: City }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }


  getCountyWiseData(countyId:string): Observable<City[]> {
    return this.http.get<{ data: City[] }>(`${environment.apiUrl}/${this.route}/county-wise?county=${countyId}`, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }
}
