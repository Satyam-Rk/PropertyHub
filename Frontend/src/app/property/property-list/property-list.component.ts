import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
  imports: [PropertyCardComponent]
})

export class PropertyListComponenet implements OnInit {
    SellRent = 1;
    Properties: Array<IProperty> = [];

    constructor(private housingService: HousingService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (this.route.snapshot.url.toString()) {
            this.SellRent = 2; //Only display rented property
        }

        this.housingService.getAllProperties(this.SellRent).subscribe({
            next: (data) => {
                this.Properties = data;
                console.log(data);
                console.log(this.route.snapshot.url.toString());
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
