import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pincode, PincodePagination } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  route = 'pincode'
  constructor(
    private http: HttpClient
  ) { }


  create(data: Pincode): Observable<Pincode> {
    return this.http.post<{ data: Pincode }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<PincodePagination> {
    return this.http.get<PincodePagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }


  getAllData(data: Pincode): Observable<Pincode[]> {
    return this.http.post<{ data: Pincode[] }>(`${environment.apiUrl}/${this.route}/all`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }


  getOne(id: string): Observable<Pincode> {
    return this.http.get<{ data: Pincode }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: Pincode): Observable<Pincode> {
    return this.http.put<{ data: Pincode }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Pincode> {
    return this.http.delete<{ data: Pincode }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
