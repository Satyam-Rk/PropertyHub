import { Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponenet } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes: Routes = [
    { path: '', component: PropertyListComponenet },
    { path: 'add-property', component: AddPropertyComponent },
    { path: 'rent-property', component: PropertyListComponenet },
    { path: 'property-detail/:id', component: PropertyDetailComponent },
    { path: 'user/login', component: UserLoginComponent},
    { path: 'user/register', component: UserRegisterComponent },
    { path: '**', component: PropertyListComponenet}
];
