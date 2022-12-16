import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdderService {
  // Constructeur par défaut
  constructor(private http: HttpClient) {}

  getCurrentNum = (): Observable<number> => {
    return this.http.get<number>('http://localhost:8090/adder/current');
  }

  add = (num: number): Observable<number> => {
    return this.http.post<number>('http://localhost:8090/adder', JSON.parse(num.toString()));
  };

  accumulate = (num: number): Observable<number> => {
    return this.http.post<number>('http://localhost:8090/adder/accumulate', JSON.parse(num.toString()));
  };

}
