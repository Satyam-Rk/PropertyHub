import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
  imports: [PropertyCardComponent]
})

export class PropertyListComponenet implements OnInit {
   Properties: Array<IProperty> = [];

    constructor(private housingService: HousingService) { }

    ngOnInit(): void {
        this.housingService.getAllProperties().subscribe({
            next: (data) => {
                this.Properties = data;
                console.log(data);
            }, 
            error: (error) => {
                console.log('httpError');
                console.log(error);
            },
            complete: () => {
                console.log('Request complete');
            }
        });
    }
}
