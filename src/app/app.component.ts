import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kitchen-stories';
  foodItems: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFoodItems().subscribe(
      (data) => {
        if (data && data.length > 0) {
          console.log('Data found:', data);
          this.foodItems = data;
        } else {
          console.log('No data found in the collection.');
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
