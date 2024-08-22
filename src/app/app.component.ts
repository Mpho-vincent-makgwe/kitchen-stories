import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, NavbarComponent],
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
        console.log("Fetched data:", data);
        this.foodItems = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
