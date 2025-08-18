import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive, BsDropdownModule]
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string;

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token') as string;
    return this.loggedInUser
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertifyService.success('Logged Out Successfully.')
  }
}
