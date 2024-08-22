import { Component,  OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foodItems: any[] = [];
  title = 'Food Items';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFoodItems().subscribe(data => {
      this.foodItems = data;
    });
  }
}
