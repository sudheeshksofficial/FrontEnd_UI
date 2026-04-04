import { Routes } from '@angular/router';
import { DataBindingTypes } from './components/data-binding-types/data-binding-types';
import { HomePage } from './components/home-page/home-page';

export const routes: Routes = [
 { path: '', component: HomePage }, 
    {path: 'databinding', component: DataBindingTypes}
];
