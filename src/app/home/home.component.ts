import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = "";
  foodItems: any[] = [];

  constructor(private router: Router,private foodItemService: FoodItemService) {}
  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/items'], { queryParams: { search: this.searchQuery } });
    }
  }
  ngOnInit(): void {
    this.foodItemService.getFoodItems().subscribe(data => {
      this.foodItems = data;
    });
  }

}
