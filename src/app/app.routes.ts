import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardForm } from './components/dashboard/dashboard-form/dashboard-form';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },          // rota inicial → Login
  { path: 'dashboard', component: DashboardForm } // rota da dashboard
];
