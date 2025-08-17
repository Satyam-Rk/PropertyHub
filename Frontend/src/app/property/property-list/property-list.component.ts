import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
  imports: [PropertyCardComponent]
})

export class PropertyListComponenet implements OnInit {
   Properties: Array<any> = [
    {
        "Id": 1,
        "Name": "Birla House",
        "Type": "House",
        "Price": 12000
    },
    {
        "Id": 2,
        "Name": "Erose Villa",
        "Type": "Villa",
        "Price": 13000
    },
    {
        "Id": 3,
        "Name": "Mark Hill",
        "Type": "Flat",
        "Price": 15000
    },
    {
        "Id": 4,
        "Name": "Gun Hill",
        "Type": "Duplex",
        "Price": 18000
    },
    {
        "Id": 5,
        "Name": "Macro Home",
        "Type": "House",
        "Price": 17000
    },
    {
        "Id": 6,
        "Name": "Pearl White House",
        "Type": "House",
        "Price": 10000
    }
  ]

    constructor() { }

    ngOnInit(): void {
    }
}
