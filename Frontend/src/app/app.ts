import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyList } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [PropertyCardComponent, PropertyList, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp');
}
