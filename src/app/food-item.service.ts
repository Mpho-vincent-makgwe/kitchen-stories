import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private apiUrl = 'http://localhost:5000/api/food-items';

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // You can add more methods for POST, PUT, DELETE etc.
}
