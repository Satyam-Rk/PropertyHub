import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponenet } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PropertyHub');
}