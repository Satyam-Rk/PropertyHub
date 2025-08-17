import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
  imports: [PropertyCardComponent]
})

export class PropertyListComponenet implements OnInit {
   Properties: any = [];

    constructor(private housingService: HousingService) { }

    ngOnInit(): void {
        this.housingService.getAllProperties().subscribe(
            data => {
                this.Properties = data;
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }
}
