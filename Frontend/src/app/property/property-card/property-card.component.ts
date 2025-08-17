import { Component, Input, input } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a Card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {font-weight: normal;}']
    styleUrl: 'property-card.component.css',
    imports: [RouterLink]
})

export class PropertyCardComponent {
    @Input() property : IProperty = {} as IProperty;
}