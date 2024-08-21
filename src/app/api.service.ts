import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api';  // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to fetch data from the backend
  getFoodItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/foodItems`);
  }
}
