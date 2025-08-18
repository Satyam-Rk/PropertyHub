import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  imports: [FormsModule]
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(LoginForm: NgForm) {
    console.log(LoginForm.value);
    const token = this.authService.authUser(LoginForm.value);

    if (token) {
      localStorage.setItem('token', token.Username);
      this.alertifyService.success('Login Successful.')
      this.router.navigate(['/']);
    }
    else
      this.alertifyService.error('Error in Login');
  }
}
