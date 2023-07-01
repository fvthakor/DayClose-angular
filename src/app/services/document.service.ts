import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentType, DocumentTypePagination } from '../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient
  ) { }


  create(data: DocumentType): Observable<DocumentType> {
    return this.http.post<{ data: DocumentType }>(`${environment.apiUrl}/document-type`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<DocumentTypePagination> {
    return this.http.get<DocumentTypePagination>(`${environment.apiUrl}/document-type?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<DocumentType[]> {
    return this.http.get<{ data: DocumentType[] }>(`${environment.apiUrl}/document-type/all`, { withCredentials: true }).pipe((map(response => response.data)))
  }

  getOne(id: string): Observable<DocumentType> {
    return this.http.get<{ data: DocumentType }>(`${environment.apiUrl}/document-type/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: DocumentType): Observable<DocumentType> {
    return this.http.put<{ data: DocumentType }>(`${environment.apiUrl}/document-type/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<DocumentType> {
    return this.http.delete<{ data: DocumentType }>(`${environment.apiUrl}/document-type/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
