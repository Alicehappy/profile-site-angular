import { Routes } from '@angular/router';
import HomePage from './pages/home.page';
import DetailsPage from './pages/details.page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'details', component: DetailsPage }
];
