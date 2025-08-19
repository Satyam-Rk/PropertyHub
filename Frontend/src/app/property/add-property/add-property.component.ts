import { Component, OnInit, viewChild, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  imports: [FormsModule, TabsModule, ButtonsModule, BsDatepickerModule, PropertyCardComponent]
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formsTab') formsTab?: TabsetComponent
  
  SellRent = '1';
  propertyTypes: Array<string> = ['House','Apartment','Duplex'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished'];
  propertyFacing: Array<string> = ['North', 'South', 'East', 'West'];

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Form submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formsTab?.tabs[tabId]) {
      this.formsTab.tabs[tabId].active = true;
    }
  }
}
