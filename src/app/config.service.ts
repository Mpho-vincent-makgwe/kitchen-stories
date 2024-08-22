import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:5020/api';  // Default API URL

  getApiUrl(): string {
    return this.apiUrl;
  }
}
