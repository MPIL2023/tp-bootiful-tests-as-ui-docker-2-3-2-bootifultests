import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AdderService {
  // Constructeur par défaut
  constructor(private http: HttpClient) {}

  getCurrent() : Observable<any>{
    return this.http.get<any>('http://localhost:8090/adder/current');
  }

}
