import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../Model/IUser';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [ReactiveFormsModule]
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user!: IUser;
  userSubmitted: boolean = false;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, { validators: passwordMatchingValidatior });

    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: passwordMatchingValidatior });
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onRegister() {
    console.log(this.registrationForm);
    this.userSubmitted = true;

    if(this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Successfully Registered.');
    } else {
      this.alertifyService.error('Kindly Provide the Required Fields!');
    }
  }

  userData(): IUser {
    return this.user = {
      Username: this.userName.value,
      Email: this.email.value,
      Password: this.password.value,
      Mobile: this.mobile.value
    }
  }
}

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
