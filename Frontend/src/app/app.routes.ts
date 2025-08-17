import { Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponenet } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

export const routes: Routes = [
    { path: '', component: PropertyListComponenet },
    { path: 'add-property', component: AddPropertyComponent },
    { path: 'rent-property', component: PropertyListComponenet },
    { path: 'property-detail/:id', component: PropertyDetailComponent },
    { path: '**', component: PropertyListComponenet}
];
