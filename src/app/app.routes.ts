import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminItemManagementComponent } from './admin-item-management/admin-item-management.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-item-management', component: AdminItemManagementComponent },
  { path: '**', redirectTo: '' }
];
