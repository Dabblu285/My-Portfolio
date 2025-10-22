import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
     {
    path: '',
    component: Home // 👈 This will load Home by default
  },
  // Optionally, other routes...
  {
    path: '**',
    redirectTo: '', // 👈 Redirect unknown routes to Home
  }
];
