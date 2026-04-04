import { Routes } from '@angular/router';
import { DataBindingTypes } from './components/data-binding-types/data-binding-types';
import { Headercomponent } from './components/headercomponent/headercomponent';
import { Dataretriever } from './components/dataretriever/dataretriever';

export const routes: Routes = [
 { path: '', component: Headercomponent }, 
    {path: 'databinding', component: DataBindingTypes},
    {path: 'dataretriever', component: Dataretriever}
];
