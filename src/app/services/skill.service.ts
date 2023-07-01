import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, SkillPagination } from '../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  route = 'skill'
  constructor(
    private http: HttpClient
  ) { }


  create(data: Skill): Observable<Skill> {
    return this.http.post<{ data: Skill }>(`${environment.apiUrl}/${this.route}`, data, {
      withCredentials: true
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getAll(page: number, limit: number, query: string): Observable<SkillPagination> {
    return this.http.get<SkillPagination>(`${environment.apiUrl}/${this.route}?page=${page}&limit=${limit}&query=${query}`, { withCredentials: true })
  }

  getAllData(): Observable<Skill[]> {
    return this.http.get<{ data: Skill[] }>(`${environment.apiUrl}/${this.route}/all`, { withCredentials: true }).pipe((map(response => response.data)))
  }

  getOne(id: string): Observable<Skill> {
    return this.http.get<{ data: Skill }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }

  update(id: string, data: Skill): Observable<Skill> {
    return this.http.put<{ data: Skill }>(`${environment.apiUrl}/${this.route}/${id}`, data, { withCredentials: true }).pipe(map(response => response.data))
  }

  delete(id: string): Observable<Skill> {
    return this.http.delete<{ data: Skill }>(`${environment.apiUrl}/${this.route}/${id}`, { withCredentials: true }).pipe(map(response => response.data))
  }
}
