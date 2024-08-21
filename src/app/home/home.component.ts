import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = "";
  foodItems: any[] = [];

  constructor(private apiService: ApiService) {}
  // onSearch() {
  //   if (this.searchQuery.trim()) {
  //     this.router.navigate(['/items'], { queryParams: { search: this.searchQuery } });
  //   }
  // }
  ngOnInit(): void {
    this.apiService.getFoodItems().subscribe(
      (data) => {
        this.foodItems = data;
        console.log('Food items:', this.foodItems);
      },
      (error) => {
        console.error('Error fetching food items:', error);
      }
    );
  }
}
