import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000/api';  // Backend URL

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/food-items`);
  }
}
